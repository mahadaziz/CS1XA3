# CS1XA3 Project 01 - <azizm17>

### Usage
##### Execute this script from CS1XA3 directory with:
    chmod +x Project01/project_analyze.sh
    ./Project01/project_analyze.sh arg1
##### With possible arguements:
    arg1: That takes a integer from 1-3 that corresponds to which feature you would like to execute
### Feature 01
###### Description: 
This feature is called FIXME Log which creates a file called fixme.log and overwrites this file if it exists. The fixme.log file holds
the names of all the files in the directory and any subdirectories that have #FIXME as its last line. This feature only works when there is no 
whitespace or special characters in any of the file names.
###### Execute this feature from CS1XA3 directory with: 
./Project01/project_analyze.sh 1

### Feature 02
###### Description: 
This feature is called File Type Count which prompts the user to input a file extension that returns the number of files that contain
that desired extension within the directory and any subdirectories.
###### Execute this feature from CS1XA3 directory with: 
./Project01/project_analyze.sh 2
###### Reference: 
Some code was taken from https://www.2daygeek.com/how-to-count-files-by-extension-in-linux/ that calculates the number of files within a 
directory and subdirectories given a certain extension.

### Feature 03
###### Description: 
This feature is called Find Tag which prompts the user to input a single word in the form of a string. This string is then searched 
through the lines that begin with a comment within all files with a .py extension within the repo. The line that contains the string is then printed 
to a file called Tag.log which is overwritten if it exists or created if it does not. This feature only works when there is no whitespace or special
characters in any of the file names.
###### Execute this feature from CS1XA3 directory with: 
./Project01/project_analyze.sh 3
###### Reference: 
Some code was taken from https://stackoverflow.com/questions/12516937/grep-but-only-certain-file-extensions that returns the filenames of 
all the files in a directory and any subdirectories given the file has a specific extension.

### Custom Feature 01
This feature is called Directory Permission Change which prompts the user to input a file permission they would to modify. This feature will then 
recursively modify all files under the current directory including any subdirectories and then change the file permissions of those files to the
permission that the user wanted to change

### Custom Feature 02
This feature is called Duplicate Sentence which prompts the user for names of two files. This feature then determines if the the first and last line of 
both files are the same and then makes a directory if it doesn't already exist called dup and then both files are then moved into the dub directory.
