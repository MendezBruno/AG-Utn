"Filed out from Dolphin Smalltalk X6"!

TestCase subclass: #GenTests
	instanceVariableNames: 'gen'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
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

