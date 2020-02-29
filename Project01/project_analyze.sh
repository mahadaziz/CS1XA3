#!/bin/bash

#Feature 01 FIXME
if [ "$1" -eq 1 ] ; then
	if [ -e fixme.log ] ; then
		> fixme.log
	else
		touch fixme.log
	fi
	for i in $(grep -lr "#FIXME"); do
		if [ "#FIXME" = "$(tail -1 $i)" ] ; then
			echo "$i" >> fixme.log
		fi
	done
fi

#Feature 02 File Type Count
if [ "$1" -eq 2 ] ; then
	echo Which file extension are you looking for?
	read f_ext
	ls -lR | grep --count \."$f_ext"$
fi

#Feature 03 Find Tag
if [ "$1" -eq 3 ] ; then
	if [ -e Tag.log ] ; then
		> Tag.log
	else
		touch Tag.log
	fi
	echo Which tag are you looking for?
	read tag
	for i in $(grep -lr --include=\*.py "$tag"); do
		tagline="$(grep -E '^#' $i | grep $tag)"
		echo "$tagline" >> Tag.log
        done
fi
<<<<<<< HEAD
=======

#Feature 04 Switch To Executable
if [ "$1" -eq 4 ] ; then
	echo Would you like to change or restore your file permissions \(Change or Restore\)?
	read ans
	if [ "$ans" = 'Change' ] ; then
		if [ -e permissions.log ] ; then
                	> permissions.log
        	else
                	touch permissions.log
        	fi
		find . -type f -name "*.sh" -print0 | while IFS= read -d '' file
		do
			echo $file
			echo "$(stat -c %a $file) $file" >> permissions.log
			u=$(stat -c %a $file | awk 'BEGIN { FS = "" } ; { print $1 }')
			g=$(stat -c %a $file | awk 'BEGIN { FS = "" } ; { print $2 }')
			o=$(stat -c %a $file | awk 'BEGIN { FS = "" } ; { print $3 }')
			if [ "$u" -eq 2 ] ; then
				chmod 3"$g""$o" $file
				u=3
			elif [ "$u" -eq 6 ] ; then
				chmod 7"$g""$o" $file
				u=7
			fi
			if [ "$g" -eq 2 ] ; then
                                chmod "$u"3"$o" $file
				g=3
                        elif [ "$g" -eq 6 ] ; then
				chmod "$u"7"$o" $file
				g=7
			fi
			if [ "$o" -eq 2 ] ; then
                                chmod "$u""$g"3 $file
				o=3
			elif [ "$o" -eq 6 ] ; then
				chmod "$u""$g"7 $file
				o=7
			fi
		done
	elif [ "$ans" = 'Restore' ] ; then
		while IFS= read -r line
		do
			acc=$(echo $line | awk '{ print $1 }')
			file=$(echo $line | awk '{ print $2 }')
			chmod "$acc" "$file"
		done < permissions.log
	fi
fi


#Feature 05 Backup And Restore
if [ "$1" -eq 5 ] ; then
	echo Would you like to backup or restore your files \(Backup or Restore\)?
	read ans
	if [ "$ans" = 'Backup' ] ; then
		if [ -d backup ] ; then
			rm -r backup
		fi
		mkdir backup
		find . -type f -name "*.tmp" -print0 | while IFS= read -d '' file
		do
			echo $file
			cp $file backup
			rm $file
			touch backup/restore.log
			echo "$file" >> backup/restore.log
		done
	else
		if [ -e backup/restore.log ] ; then
			cat backup/restore.log | xargs touch
		else
			echo Error: file restore.log does not exist
		fi
	fi
fi

#Custom Feature 1
if [ "$1" -eq 6 ] ; then
	echo Would you like to add or remove permissions for your files \(Add or Remove\)?
	read ans
	echo Which file permission do you want to change \(r, w or x\)?
	read ans2
	if [ "$ans" = 'Add' ] ; then
		find . -type f -print0 | while IFS= read -d '' file
		do
			chmod +"$ans2" $file
		done
	elif [ "$ans" = 'Remove' ] ; then
		find . -type f -print0 | while IFS= read -d '' file
		do
                        chmod -"$ans2" $file
                done
	else
		echo Error: Did not enter valid option
	fi
fi

#Custom Feature 02
if [ "$1" -eq 7 ] ; then
	echo Enter the name of the first file
	read file1
	echo Enter the name of the second file
	read file2
	if [ ! -d dup ] ; then
		mkdir dup
	fi
	if [ $(head -1 "$file1") = $(head -1 "$file2") ] && [ $(tail -1 "$file1") = $(tail -1 "$file2") ] ; then
		mv "$file1" dup
		mv "$file2" dup
	fi
fi
>>>>>>> project01
echo "Finished"
