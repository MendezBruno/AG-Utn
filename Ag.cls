"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Ag
	instanceVariableNames: 'poblacionInicial poblacion_seleccionada poblacionMundial mutacion cruzamiento seleccion aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Ag guid: (GUID fromString: '{0418FE3E-735A-4CA4-8089-1D862A0B4BD0}')!
Ag comment: ''!
!Ag categoriesForClass!Unclassified! !
!Ag methodsFor!

agregarGen: unGen
	self poblacionMundial add: unGen.
	self guardarPoblacion.!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

buscarGen: unGen
^poblacionMundial detect: [:each | (self convertir_a_decimal: each posicion) =  (self convertir_a_decimal: unGen posicion) ]!

cargarPoblacion
	| fileIn byteArray |
	fileIn := FileStream read: 'poblacion'.
	byteArray := fileIn collection asByteArray.
	poblacionMundial := ODBDeserializer deserializeFromBytes: byteArray!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

crearGen: unNombre
	| gen |
	gen := Gen new: (Array new: 6).
	gen nombre: unNombre.
	^gen!

cruzamiento
	^cruzamiento!

cruzamiento: anObject
	cruzamiento := anObject!

existeGen: unGen
^poblacionMundial anySatisfy: [:each | (self convertir_a_decimal: each posicion) =  (self convertir_a_decimal: unGen posicion) ]!

guardarPoblacion
	| fileOut |
	(File exists: 'poblacion')
		ifTrue: 
			[fileOut := FileStream write: 'poblacion'.
			fileOut nextPutAll: (ODBSerializer serializeToBytes: self poblacionMundial).
			fileOut
				flush;
				close]
		ifFalse: 
			[fileOut := FileStream write: 'poblacion'.
			fileOut nextPutAll: (ODBSerializer serializeToBytes: self poblacionMundial).
			fileOut
				flush;
				close]!

initialize
	self aptitud: Aptitud new.
	self seleccion: Torneo new.
	self poblacionMundial: OrderedCollection new.!

mutacion
	^mutacion!

mutacion: anObject
	mutacion := anObject!

poblacion_seleccionada
	^poblacion_seleccionada!

poblacion_seleccionada: anObject
	poblacion_seleccionada := anObject!

poblacionInicial
	^poblacionInicial!

poblacionInicial: anObject
	poblacionInicial := anObject!

poblacionMundial
	^poblacionMundial!

poblacionMundial: anObject
	poblacionMundial := anObject!

seleccion
	^seleccion!

seleccion: anObject
	seleccion := anObject! !
!Ag categoriesFor: #agregarGen:!public! !
!Ag categoriesFor: #aptitud!accessing!public! !
!Ag categoriesFor: #aptitud:!accessing!public! !
!Ag categoriesFor: #buscarGen:!public! !
!Ag categoriesFor: #cargarPoblacion!public! !
!Ag categoriesFor: #convertir_a_decimal:!public! !
!Ag categoriesFor: #crearGen:!public! !
!Ag categoriesFor: #cruzamiento!accessing!public! !
!Ag categoriesFor: #cruzamiento:!accessing!public! !
!Ag categoriesFor: #existeGen:!public! !
!Ag categoriesFor: #guardarPoblacion!public! !
!Ag categoriesFor: #initialize!public! !
!Ag categoriesFor: #mutacion!accessing!public! !
!Ag categoriesFor: #mutacion:!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada:!accessing!public! !
!Ag categoriesFor: #poblacionInicial!accessing!public! !
!Ag categoriesFor: #poblacionInicial:!accessing!public! !
!Ag categoriesFor: #poblacionMundial!accessing!private! !
!Ag categoriesFor: #poblacionMundial:!accessing!private! !
!Ag categoriesFor: #seleccion!accessing!public! !
!Ag categoriesFor: #seleccion:!accessing!public! !

!Ag class methodsFor!

new
	^super new initialize
! !
!Ag class categoriesFor: #new!public! !

