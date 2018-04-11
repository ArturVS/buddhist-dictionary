NTI Buddhist Text Reader Project
===============================================================================

The NTI Buddhist Text Reader is a Chinese text reader, including a 
Chinese-English dictionary and corpus management tools, for analyzing and
managing Buddhist Chinese texts. This is a non-profit, open source project.

Goals:

1. Create a text reader for the Taishō Shinshū Daizōkyō version of the 
   Chinese Buddhist canon.

2. Create a Chinese-English Buddhist dictionary that is free and easy to use for 
   everybody interested in Buddhism, including lay people reading Buddhist
   texts, students, translators, and academics.

3. Create tools that are useful for lingustic analysis of Buddhist texts,
   including identification of specialist Buddhist terms and comparison of
   Chinese texts.

There are three parts to the project:

1. The web user interface. This includes HTML, PHP, and JavaScript files. The
   HTML files are generated by the Go language 
   [cnreader](https://github.com/alexamies/chinesenotes.com/tree/master/go/src/cnreader)
   command line tool from the [Chinese Notes](http://chinesenotes.com) sister
   project.

2. The data. This is the dictionary and text files. The data files are in UTF-8
   tab delimited text. There is also a corpus directory, which contains the
   literature to build the vocabulary and word frequency from. These are
   Chinese texts from the Buddhist canon and related collections.

3. Command line tools for building vocabulary. These are in Python. 

The license for the web site and dictionary content is Creative Commons 
Attribution-Share Alike 3.0. The license for source code and markup templates, 
is Apache 2.0.

Acknowldegements:

1. The dictionary includes many terms from the [CC-CEDICT Chinese - English 
   dictionary](http://cc-cedict.org/wiki/), shared under the 
   [Creative Commons Attribution-Share Alike 3.0
   License](http://creativecommons.org/licenses/by-sa/3.0/).

2. Historic Buddhist texts from the Taishō Tripiṭaka are from
   [CBETA](http://cbeta.org).

3. Sources listed in the [References](http://ntireader.org/references.html).

Humanistic Buddhism texts are now moved to the [Humanistic Buddhism
Reader](http://hbreader.org/).

-------------------------------------------------------------------------------
Copyright Nan Tien Institute 2013-2017, http://www.nantien.edu.au.
