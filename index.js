$dir=@opendir(".");
if ($dir):
$esconde = array(".", "..", ".htaccess", "index.php", ".htuh");
while ($lista = readdir($dir)) {
if (!in_array($lista, $esconde))
print "
$lista";
}
endif;
closedir($dir);
?>