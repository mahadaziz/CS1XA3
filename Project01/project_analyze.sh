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
echo "Finished"
