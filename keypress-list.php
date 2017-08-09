<?php
/* Plugin Name: Keypress-list
Plugin URI: http://wordpress.org/plugins/keypress-list/
Description: Keypress-list is a plug-in that allow user to launch JavaScript/jQuery codes or functions by using keyboard shortcut's. In admin section you can specify what for actions does it launch with what for short-cut. To activate the shortcup listener, in Front-Office, user must tip "Shift" and "S" keys simultaneously, then tip the shortcut. Visit the author <a href="http://jud-alex.com/web/keypress-list/" target="_blank">section's site</a>. Thanks to <a href="http://dmauro.github.io/Keypress/" target="_blank">dmauro</a> for his library.
Version: 0.2
Author: Jud Alex
Author URI:  http://jud-alex.com/
License: GPLv2
*/
?>
<?php 
function kprl_trdom_load_text_domain() {
   $path = dirname(plugin_basename(__FILE__)) . '/lang/';
   load_plugin_textdomain('kprl_trdom', null, $path);
}
add_action('init', 'kprl_trdom_load_text_domain');

function kprl_scripts() {

  wp_register_script('keypress-list', plugins_url('js/keypress-list.js', __FILE__));
  wp_enqueue_script('keypress-list');
  wp_register_script('keypress-list', plugins_url('js/kprl_scripts_load.js', __FILE__));
  wp_enqueue_script('keypress-list');
}

add_action('wp_enqueue_scripts', 'kprl_scripts', 100);


function kprl_plugin_menu() {
		$menu = add_menu_page('Keypress List Display', 'Keypress List', 'manage_options', 'keypress-list/admin/kprl_admin.php', '', plugins_url( 'keypress-list/img/keypress_list_ico.png' ));
}
add_action('admin_menu', 'kprl_plugin_menu');	

// Add settings link on plugin page
function your_plugin_settings_link($links) { 
  $settings_link = '<a href="admin.php?page=keypress-list/admin/kprl_admin.php">Settings</a>'; 
  array_unshift($links, $settings_link); 
  return $links; 
}
 
$plugin = plugin_basename(__FILE__); 
add_filter("plugin_action_links_$plugin", 'your_plugin_settings_link' );


function kprl_php_load() {
    include('kprl.php'); 
}
add_action( 'wp_footer', 'kprl_php_load' );

?>