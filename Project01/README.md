# CS1XA3 Project 01 - <azizm17>

### Usage
##### Execute this script from Project01 directory with:
    chmod +x project_analyze.sh
    ./project_analyze.sh arg1
##### With possible arguements:
    arg1: That takes a integer from 1-7 that corresponds to which feature you would like to execute
### Feature 01
###### Description: 
This feature is called FIXME Log which creates a file called fixme.log and overwrites this file if it exists. The fixme.log file holds
the names of all the files in the directory and any subdirectories that have #FIXME as its last line. This feature only works when there is no 
whitespace or special characters in any of the file names.
###### Execute this feature from Project01 directory with: 
./project_analyze.sh 1

### Feature 02
###### Description: 
This feature is called File Type Count which prompts the user to input a file extension that returns the number of files that contain
that desired extension within the directory and any subdirectories.
###### Execute this feature from Project01 directory with: 
./project_analyze.sh 2
###### Reference: 
Some code was taken from https://www.2daygeek.com/how-to-count-files-by-extension-in-linux/ that calculates the number of files within a 
directory and subdirectories given a certain extension.

### Feature 03
###### Description: 
This feature is called Find Tag which prompts the user to input a single word in the form of a string. This string is then searched 
through the lines that begin with a comment within all files with a .py extension within the repo. The line that contains the string is then printed 
to a file called Tag.log which is overwritten if it exists or created if it does not. This feature only works when there is no whitespace or special
characters in any of the file names.
###### Execute this feature from Project01 directory with: 
./project_analyze.sh 3
###### Reference: 
Some code was taken from https://stackoverflow.com/questions/12516937/grep-but-only-certain-file-extensions that returns the filenames of 
all the files in a directory and any subdirectories given the file has a specific extension.

### Feature 04
###### Description:
This feature is called Switch to Executable which prompts the user to either input Change or Restore. If the user inputs Change then all .sh files' 
access permissions are then checked. Whichever group that has a write permission is then also given permission to execute those files. A log of
all the original permissions in octat form of the .sh files are then stored into a file called permissions.log. If the user inputs Restore then all 
the original file permissions that were in the permissions.log file are restored to what they were originally. This feature only works on files and 
directories that have no whitespace or special characters in their names.
###### Execute this feature from Project01 directory with:
./project_analyze.sh 4
###### Refernce
Some code was taken from https://www.cyberciti.biz/faq/get-octal-file-permissions-from-command-line-on-linuxunix/ that allows me to obtain the octal
file permissions of a file, https://www.gnu.org/software/gawk/manual/html_node/Field-Separators.html that allows me to specify the field seperator used
in the awk command and allows me to take arguements based on the new field seperator, and https://www.cyberciti.biz/faq/unix-howto-read-line-by-line-from-file/
allows me to read through a file line by line using a while loop.

### Feature 05
###### Description:
This feature is called Backup and Delete / Restore which prompts the user to either input Backup or Restore. If the user inputs Backup then a directory
called backup is then made if it doesn't exist or cleared if it does. All files that have the .tmp extension are then copied into the backup directory
and then deleted from there original location, however a copy of their filepaths are then saved to a file called restore.log which is also in the backup
directory. If the user inputs Restore then all the .tmp files in backup are then restored to their original locations.
###### Execute this feature from Project01 directory with:
./project_analyze.sh 5

### Custom Feature 01
###### Description:
This feature is called Directory Permission Change which prompts the user to input a file permission they would like to modify. This feature will then 
recursively modify all files under the current directory including any files located within any subdirectories and then change the file permissions 
of those files to the permission that the user wanted to modify. This feature only works on files and directories that have no whitespace or special 
characters in their name. This feature only works on files and directories that do not have any whitespace or special characters in their name.
###### Execute this feature from Project01 directory with:
./project_analyze.sh 6

### Custom Feature 02
###### Description
This feature is called Duplicate Sentence which prompts the user for names of two files. This feature also creates a directory called dup if it doesn't
already exist and then determines if the the first and last line of both files are the same. If both the first and last lines of both files are the same
then both files are then moved into the dup directory if not then they are left in their original location. This feature only works on files and 
directories that do not have any whitespace in their names and also this feature only works if both files are in the same relative directory.
###### Execute this feature from Project01 directory with:
./project_analyze.sh 7
