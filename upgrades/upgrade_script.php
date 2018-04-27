<?php
define('UPGRADE_SCRIPT_VERSION', 0.0);
define('UPGRADE_SCRIPT_TRANSIENT', get_transient('upgrade_script_version'));

if(UPGRADE_SCRIPT_TRANSIENT < UPGRADE_SCRIPT_VERSION) {
    brandastic_upgrade_script();
    set_transient('upgrade_script_version', UPGRADE_SCRIPT_VERSION);
}


function brandastic_upgrade_script()
{

}