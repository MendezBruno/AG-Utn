"Filed out from Dolphin Smalltalk X6"!

Model subclass: #Gen
	instanceVariableNames: 'nombre posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Gen guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Gen comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

crearPosicionesGen: unNumero 
	"Crea el array del gen con las posiciones de un numero"

	posicion := Array new: unNumero!

nombre
	"Answer the value of the receiver's 'nombre' instance variable."

	^nombre!

nombre: anObject
	"Set the value of the receiver's 'nombre' instance variable to the argument."

	nombre := anObject!

posicion
	"Answer the value of the receiver's 'posicion' instance variable."

	^posicion!

posicion: anObject
	"Set the value of the receiver's 'posicion' instance variable to the argument."

	posicion := anObject! !
!Gen categoriesFor: #crearPosicionesGen:!accessing!public! !
!Gen categoriesFor: #nombre!accessing!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !

!Gen class methodsFor!

new: unNumero
	|gen|
	gen:= self new.
	gen posicion: (Array new: unNumero).
	^gen! !
!Gen class categoriesFor: #new:!public! !

