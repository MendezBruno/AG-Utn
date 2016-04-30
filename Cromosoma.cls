"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Cromosoma
	instanceVariableNames: 'genes aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
!Cromosoma methodsFor!

<<<<<<< Updated upstream
aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!
=======
dameTusGenesDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	genes do: [:gen | listaGenes add: (gen copyFrom: start to: stop)].
	^listaGenes!
>>>>>>> Stashed changes

genes
	^genes!

genes: anObject
	genes := anObject!

initialize
	self genes: OrderedCollection new.! !
<<<<<<< Updated upstream
!Cromosoma categoriesFor: #aptitud!accessing!private! !
!Cromosoma categoriesFor: #aptitud:!accessing!private! !
=======
!Cromosoma categoriesFor: #dameTusGenesDesde:a:!public! !
>>>>>>> Stashed changes
!Cromosoma categoriesFor: #genes!accessing!private! !
!Cromosoma categoriesFor: #genes:!accessing!private! !
!Cromosoma categoriesFor: #initialize!public! !

!Cromosoma class methodsFor!

new
	^super new initialize
! !
!Cromosoma class categoriesFor: #new!public! !

