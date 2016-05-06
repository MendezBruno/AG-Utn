"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Gen
	instanceVariableNames: 'nombre posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Gen guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Gen comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

diaSemana: unArray
	self posicion at:4 put: (unArray at: 1).
	self posicion at:5 put: (unArray at: 2).
	self posicion at:6 put: (unArray at: 3).!

dificultad:unArray
	self posicion at:2 put: (unArray at: 1).
	self posicion at:3 put: (unArray at: 2).
	!

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

	posicion := anObject!

tieneFinal:aBoolean
	aBoolean ifTrue: [self posicion at:1 put:0].! !
!Gen categoriesFor: #diaSemana:!public! !
!Gen categoriesFor: #dificultad:!public! !
!Gen categoriesFor: #nombre!accessing!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !
!Gen categoriesFor: #tieneFinal:!public! !

!Gen class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen! !
!Gen class categoriesFor: #new:!public! !

