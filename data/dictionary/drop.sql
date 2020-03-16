/*
 * RELATIONAL DATABASE DROP STATEMENTS
 * ============================================================================
 */

/*
 * These drop statements will drop the database tables deleting the data in the
 * process. Be careful!
 * 
 * Use this file by logging into the mysql client and executing the command
 *
 * > source dictionary.ddl
 */

use ntireader;

drop table unigram;
drop table bigram;
drop table illustrations;
drop table authors;
drop table licenses;
drop table words;
drop table topics;
drop table grammar;
