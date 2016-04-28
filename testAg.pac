| package |
package := Package name: 'testAg'.
package paxVersion: 0;
	basicComment: ''.


package classNames
	add: #GenTests;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package allResourceNames: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: 'ag';
	add: 'C:\Users\bmendez\Desktop\Imagen BV 7\Camp Smalltalk\SUnit\SUnit';
	yourself).

package!

"Class Definitions"!

TestCase subclass: #GenTests
	instanceVariableNames: 'gen'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

GenTests guid: (GUID fromString: '{DF2ADFD4-A595-4054-8295-48C18C478890}')!
GenTests comment: ''!
!GenTests categoriesForClass!Unclassified! !
!GenTests methodsFor!

setUp
	gen:= Gen new:5!

testNew
	| genAux |
	genAux := Gen new: 7.
	self assert: genAux posicion size = 7! !
!GenTests categoriesFor: #setUp!public! !
!GenTests categoriesFor: #testNew!public! !

"Binary Globals"!

"Resources"!

