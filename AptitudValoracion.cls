"Filed out from Dolphin Smalltalk 7"!

Model subclass: #AptitudValoracion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
AptitudValoracion guid: (GUID fromString: '{739A3F71-BF23-494C-9922-7A57F172BD1A}')!
AptitudValoracion comment: ''!
!AptitudValoracion categoriesForClass!MVP-Models! !
!AptitudValoracion class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen | acum := acum + (self valorDe: gen)].
	^acum * 50!

valorDe: gen
|acum|
acum:=0.

	^acum
		! !
!AptitudValoracion class categoriesFor: #aptitudDe:!public! !
!AptitudValoracion class categoriesFor: #valorDe:!public! !

