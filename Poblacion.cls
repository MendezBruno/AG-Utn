"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Poblacion
	instanceVariableNames: 'cromosomas'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Poblacion guid: (GUID fromString: '{6E45A802-A093-41B1-92E1-195D13E10CB8}')!
Poblacion comment: ''!
!Poblacion categoriesForClass!MVP-Models! !
!Poblacion methodsFor!

cromosomas
	^cromosomas!

cromosomas: anObject
	cromosomas := anObject!

initialize
	self cromosomas: OrderedCollection new.!

mutate
	| rGenerator rCromo rGen rPosicion |
	rGenerator := Random new.
	rCromo := (rGenerator next * (cromosomas size - 1)) rounded + 1.
	rGen := (rGenerator next * 2) rounded + 1.
	rPosicion := (rGenerator next * 5) rounded + 1.
	(((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion) = 1
		ifTrue: [((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion put: 0]
		ifFalse: [((self cromosomas at: rCromo) genes at: rGen) posicion at: rPosicion put: 1]! !
!Poblacion categoriesFor: #cromosomas!accessing!public! !
!Poblacion categoriesFor: #cromosomas:!accessing!public! !
!Poblacion categoriesFor: #initialize!public! !
!Poblacion categoriesFor: #mutate!accessing!public! !

!Poblacion class methodsFor!

new
	^super new initialize! !
!Poblacion class categoriesFor: #new!public! !

