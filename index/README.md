# Index Directory
The index directory is used for writing corpus analysis to plain text files.

## Files Generated
Files written to this directory:

word_frequencies.txt
Frequencies for the whole corpus
Fields
- Chinese word (either simplified or traditional)
- count
- frequency per 10,000 words

word_frequencies.txt
Frequencies per document
Fields:
- Chinese word (either simplified or traditional)
- count
- frequency per 10,000 words
- document file

unknown.txt
Characters found in the corpus that are not listed in the dictionary
Fields:
- Unicode value
- character

word_freq_doc.txt
Word frequencies in each document

bigram_freq_doc.txt
Bigram frequencies for each document

doc_length.tsv
Document lengths

## Analysis with BigQuery
Execute from top level directory. Create a dataset:
```
bq mk ntireader
```

Load document, word frequency, and bigram data:
```
bin/doc_list.sh
bq load --field_delimiter '\t' \
  ntireader.document data/corpus/documents.csv \
  gloss_file:string,title:string,col_gloss_file:string,col_title:string,col_plus_doc_title:string

bq show cnreader.document

bq load --field_delimiter '\t' --replace \
  ntireader.word_freq_doc index/word_freq_doc.txt \
  word:string,frequency:integer,collection:string,document:string,idf:float64,doc_len:integer

bq load --field_delimiter '\t' --replace \
  ntireader.bigram_freq_doc index/bigram_freq_doc.txt \
  bigram:string,frequency:integer,collection:string,document:string,idf:float64,doc_len:integer

bq load --field_delimiter '\t' \
  ntireader.doc_length index/doc_length.tsv \
  gloss_file:string,doc_len:integer
```

Run some queries
```
bq query "SELECT gloss_file, col_gloss_file FROM ntireader.document WHERE col_plus_doc_title CONTAINS '箴' LIMIT 10"

bq query "SELECT word, frequency, document, idf FROM ntireader.word_freq_doc WHERE collection = 'wenji/miyun_jiayouzhan.html' LIMIT 5"

bq query "SELECT bigram, frequency, document, idf FROM ntireader.bigram_freq_doc WHERE collection = 'wenji/miyun_jiayouzhan.html' LIMIT 5"

bq query "SELECT COUNT(doc_len) AS num, AVG(doc_len) adl FROM ntireader.doc_length LIMIT 1"
+------+-------------------+
| num  |        adl        |
+------+-------------------+
| 8797 | 6376.078435830396 |
+------+-------------------+
```

Delete tables
```
bq rm ntireader.word_freq_doc
bq rm ntireader.bigram_freq_doc
```