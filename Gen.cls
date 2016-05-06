"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Gen
	instanceVariableNames: 'nombre caracteristicas aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Gen guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Gen comment: ''!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

caracteristicas: anObject
	caracteristicas := anObject!

carateristicas
	^caracteristicas!

dameTusCaracteristicasDesde: start a: stop
	| listaGenes |
	listaGenes := OrderedCollection new.
	caracteristicas do: [:caracteristica | listaGenes add: (caracteristica posicion copyFrom: start to: stop)].
	^listaGenes!

initialize
	self caracteristicas: OrderedCollection new! !
!Gen categoriesFor: #aptitud!public! !
!Gen categoriesFor: #aptitud:!public! !
!Gen categoriesFor: #caracteristicas:!accessing!public! !
!Gen categoriesFor: #carateristicas!public! !
!Gen categoriesFor: #dameTusCaracteristicasDesde:a:!public! !
!Gen categoriesFor: #initialize!public! !

!Gen class methodsFor!

new
	^super new initialize
! !
!Gen class categoriesFor: #new!public! !

