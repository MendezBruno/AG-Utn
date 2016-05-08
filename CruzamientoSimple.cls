"Filed out from Dolphin Smalltalk 7"!

CruzamientoStrategy subclass: #CruzamientoSimple
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
CruzamientoSimple guid: (GUID fromString: '{335521A3-1182-45AC-867E-2A0694C1E1EA}')!
CruzamientoSimple comment: ''!
!CruzamientoSimple categoriesForClass!Unclassified! !
!CruzamientoSimple methodsFor!

cruzaImparUna: unaPoblacion conCantidad: unaCantidad
	| iteracion |
	self cruzarCromosoma: unaPoblacion first y: unaPoblacion first.
	iteracion := 2.
	unaCantidad timesRepeat: 
			[self cruzarCromosoma: (unaPoblacion at: iteracion) y: (unaPoblacion at: iteracion + 1).
			iteracion := iteracion + 2]!

cruzaParUna: unaPoblacion conCantidad: unaCantidad
	| iteracion |
	iteracion := 1.
	unaCantidad timesRepeat: 
			[self cruzarCromosoma: (unaPoblacion at: iteracion) y: (unaPoblacion at: iteracion + 1).
			iteracion := iteracion + 2]!

cruzarCromosoma: cromo1 y: cromo2
	| iteracion temp cromoHijo1 cromoHijo2 genMedioHijo1 genMedioHijo2 |
	iteracion := 1.
	cromoHijo1 := Cromosoma new.
	cromoHijo2 := Cromosoma new.
	cromoHijo1 genes add: cromo2 genes first.
	cromoHijo2 genes add: cromo1 genes first.
	genMedioHijo1 := cromo1 genes second.
	genMedioHijo2 := cromo2 genes second.
	3 timesRepeat: 
			[temp := genMedioHijo1 posicion at: iteracion.
			genMedioHijo1 posicion at: iteracion put: (genMedioHijo2 posicion at: iteracion).
			genMedioHijo2 posicion at: iteracion put: temp.
			iteracion := iteracion + 1].
	cromoHijo1 genes add: genMedioHijo1.
	cromoHijo2 genes add: genMedioHijo2.
	cromoHijo1 genes add: cromo1 genes third.
	cromoHijo2 genes add: cromo2 genes third.
	cromo1 genes: cromoHijo1 genes.
	cromo2 genes: cromoHijo2 genes!

cruzarResTorneo: unaPoblacion
	| numCruza |
	numCruza := unaPoblacion size // 2.
	numCruza \\ 2 = 0
		ifTrue: [self cruzaParUna: unaPoblacion conCantidad: numCruza // 2]
		ifFalse: [self cruzaImparUna: unaPoblacion conCantidad: numCruza // 2].
	^unaPoblacion! !
!CruzamientoSimple categoriesFor: #cruzaImparUna:conCantidad:!public! !
!CruzamientoSimple categoriesFor: #cruzaParUna:conCantidad:!public! !
!CruzamientoSimple categoriesFor: #cruzarCromosoma:y:!public! !
!CruzamientoSimple categoriesFor: #cruzarResTorneo:!public! !

