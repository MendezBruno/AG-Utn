"Filed out from Dolphin Smalltalk 7"!

SeleccionStrategy subclass: #Torneo
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Torneo guid: (GUID fromString: '{8FD5E23B-9C62-47A3-BEDC-690FD816F7CF}')!
Torneo comment: ''!
!Torneo categoriesForClass!MVP-Models! !
!Torneo methodsFor!

poblacion
	^poblacion!

poblacion: anObject
	poblacion := anObject!

seleccion: unaPoblacion
	unaPoblacion  sortUsing: (DefaultSortAlgorithm sortBlock: [:a :b | a aptitud > b aptitud]).
	^unaPoblacion! !
!Torneo categoriesFor: #poblacion!accessing!private! !
!Torneo categoriesFor: #poblacion:!accessing!private! !
!Torneo categoriesFor: #seleccion:!public! !

