"Filed out from Dolphin Smalltalk 7"!

Model subclass: #AptitudSuperposicion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
AptitudSuperposicion guid: (GUID fromString: '{80BA86AB-DFA6-4F06-BC41-EAEF711C1C81}')!
AptitudSuperposicion comment: ''!
!AptitudSuperposicion categoriesForClass!MVP-Models! !
!AptitudSuperposicion class methodsFor!

aptitudDe: listaGenes
^(self genesIguales:listaGenes)*-125


!

genesIguales:listaGenes
|listaNumeros |
listaNumeros:= OrderedCollection new.
listaGenes do:[:gen| listaNumeros add: ("genDeByteaInt:"gen)].
^(listaNumeros size)- (listaNumeros asSet size)
! !
!AptitudSuperposicion class categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion class categoriesFor: #genesIguales:!public! !

