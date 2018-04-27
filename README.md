# README #

# After Forking Repo #

## Create Folder Symlinks for Plugins ##
We are using submodules for all of the plugins that we consistently use. Some of those 
plugins are grouped together in one repo for better maintainability. Wordpress does not like
plugins being inside other folders and will not detect them. Our workaround for that is to 
create folders in the base plugins folder with symbolic links to the actual plugin code.
The following plugins need to symlinks that live in the base plugins directory:
wp-migrate-db-pro
wp-migrate-db-pro-cli
wp-migrate-db-pro-media-tools
wp-migrate-db-pro-multisite-tools

How to create the symlinks example:

Windows: mklink /D wp-migrate-db-pro-cli\ wp-migrate-db-module\wp-migrate-db-pro-cli\

Linux: ln -s wp-migrate-db-module\wp-migrate-db-pro-cli\ wp-migrate-db-pro-cli\ 

# How Tos
## Using WP CLI
WP CLI is added to the basebuild via a Composer dependency, so that we do not need to rely on the
server having this installed globally. In order to use the commands for WP CLI from the installation,
in root directory you can run: 
```vendor\wp-cli\wp-cli\bin\wp```

## Running npm commands locally
Using the same idea from WP CLI, to avoid depending on the server to have everything we need installed,
we can run any npm local dependencies by doing(ex. gulp):
```$(npm bin)/gulp build```

## Deployment Script
Note: This is still a Beta implementation but it does function. If you have any suggestions on how to improve 
this process, feel free to bring them up.
### Overview
The idea behind the deployment script loosely follows the idea behind magento's extension update
scripts. Basically, we bundle our deployment process either by Deploybot or our own bash script on 
production, which resemble something like this:
```git fetch
   git pull origin staging
   git submodule update --init --recursive
   yarn install
   composer install
   $(npm bin)/gulp build
   vendor\wp-cli\wp-cli\bin\wp eval-file /var/www/order-staging.kaleandcoconutsla.com/upgrades/upgrade_script.php --path=/var/www/order-staging.kaleandcoconutsla.com/public_html --skip-plugins=brandastic-landing
```
The first few lines are standard deployment commands such as fetching the code, grabbing submodule 
updated code, installing dependencies and running gulp to build our assets.
The last command is where we use WP CLI to run a php script to perform any content edits we need to 
do on the site such as updating product attributes, adding DB specific entries. etc.

If you take a look at the deployment script in upgrades/upgrade_script.php, you'll see that we
use a defined constant to declare our new deploy script version, and a transient living in the DB
to act as the current script version. The script compares the two values and if the transient is smaller
than the constant, then that indicates that we have update that needs to take place and the code is ran.
The function then updates the transient value so that next time a deployment happens and we havnt
updated the constant again, then nothing will run.

IMPORTANT NOTE: In order for this process to work. The transient value needs to be initially defined in the database
(either manually, or using WP CLI, or whatever preferred method of choice), and ideally that value
should be set to ```0.0``` so that we can use versioning properly.