"Filed out from Dolphin Smalltalk 7"!

Model subclass: #AptitudBooleanTrue
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
AptitudBooleanTrue guid: (GUID fromString: '{E1972F12-E1FB-413D-BA12-B84394E7A069}')!
AptitudBooleanTrue comment: ''!
!AptitudBooleanTrue categoriesForClass!MVP-Models! !
!AptitudBooleanTrue methodsFor!

aptitudDe: listaGenes
	| acum |
	acum:=0.
	listaGenes do: [:gen | (gen includes: 0) ifTrue: [acum := acum - 50] ifFalse: [acum := acum + 100]].
	^acum! !
!AptitudBooleanTrue categoriesFor: #aptitudDe:!public! !

!AptitudBooleanTrue class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum:=0.
	listaGenes do: [:gen | (gen includes: 1) ifTrue: [acum := acum - 50] ifFalse: [acum := acum + 100]].
	^acum! !
!AptitudBooleanTrue class categoriesFor: #aptitudDe:!public! !

