<?php
// Script to look up all words in a block of Chinese text
require_once 'inc/chinesetext.php' ;
mb_internal_encoding('UTF-8');
header('Content-Type: text/json;charset=utf-8');
$text = $_POST['text'];
// error_log("Length of text: " . strlen($text));
if (strlen($text) > 100) {
    print('{"error":"Too long. Text cannot exceed 100 characters."}' .
          '{"words":"[]"}');
} else {
    $chineseText = new ChineseText($text, 'traditional');
    $elements = $chineseText->getTextElements();
    $words = "[";
    foreach ($elements as $element) {
        $elemText = $element->getText();
        $elemType = $element->getType();
        $count = $element->getNumWords();
        $word = "";
        $english = "";
        $notes = "";
        $id = "";
        $pinyin = "";
        if (($elemType == 1) || ($elemType == 2)) {
            $word = $element->getWord();
            $english = $word->getEnglish();
            $notes = $word->getNotes();
            $id = $word->getId();
            $pinyin = $word->getPinyin();
        }
        $words .= '{"text":"' . $elemText . '",' .
                   '"english":"' . $english . '",' .
                   '"notes":"' . $notes . '",' .
                   '"id":"' . $id . '",' .
                   '"pinyin":"' . $pinyin . '",' .
                   '"count":"' . $count . '"' .
                  '},';
    }
    $words = rtrim($words, ",") . "]";
    // error_log("words: $words \n");
    print('{"words":' . $words . "}");
}
?>
