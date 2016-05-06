"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Caracteristica
	instanceVariableNames: 'nombre posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Caracteristica guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Caracteristica comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Caracteristica categoriesForClass!Unclassified! !
!Caracteristica methodsFor!

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
!Caracteristica categoriesFor: #nombre!accessing!public! !
!Caracteristica categoriesFor: #nombre:!accessing!public! !
!Caracteristica categoriesFor: #posicion!accessing!public! !
!Caracteristica categoriesFor: #posicion:!accessing!public! !

!Caracteristica class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen! !
!Caracteristica class categoriesFor: #new:!public! !

