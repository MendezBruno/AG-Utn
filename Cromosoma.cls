"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Cromosoma
	instanceVariableNames: 'nombre genes aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
!Cromosoma methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

dameTusCaracteristicasDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	genes do: [:gen| listaGenes add: (gen posicion copyFrom: start to: stop)].
	^listaGenes!

genes
	^genes!

genes: anObject
	genes := anObject!

initialize
	self genes: OrderedCollection new.
	self aptitud: 0!

nombre
	^nombre!

nombre: anObject
	nombre := anObject!

revisarExitenciaDeMaterias: unAg
	"si alguno satisface que no existe y entonces asi la desestima"

	(self genes anySatisfy: [:gen | (unAg existeGen: gen) not])
		ifTrue: [self aptitud: self aptitud - 2000]! !
!Cromosoma categoriesFor: #aptitud!public! !
!Cromosoma categoriesFor: #aptitud:!public! !
!Cromosoma categoriesFor: #dameTusCaracteristicasDesde:a:!public! !
!Cromosoma categoriesFor: #genes!public! !
!Cromosoma categoriesFor: #genes:!accessing!public! !
!Cromosoma categoriesFor: #initialize!public! !
!Cromosoma categoriesFor: #nombre!accessing!public! !
!Cromosoma categoriesFor: #nombre:!accessing!public! !
!Cromosoma categoriesFor: #revisarExitenciaDeMaterias:!public! !

!Cromosoma class methodsFor!

new
	^super new initialize
! !
!Cromosoma class categoriesFor: #new!public! !

