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