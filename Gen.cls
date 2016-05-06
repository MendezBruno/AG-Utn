"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Gen
	instanceVariableNames: 'nombre dificultad dia final posicion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Gen guid: (GUID fromString: '{81058575-B619-4315-AF48-DDD1A55C3CA6}')!
Gen comment: 'Esta Clase se usa para definir cada gen que compondran los cromosomas.'!
!Gen categoriesForClass!Unclassified! !
!Gen methodsFor!

dia
	^dia!

dia: anObject
	dia := anObject!

diaSemana: unArray tipo: unTipo
	self posicion at:4 put: (unArray at: 1).
	self posicion at:5 put: (unArray at: 2).
	self posicion at:6 put: (unArray at: 3).
	self dia: unTipo!

dificultad
	^dificultad!

dificultad: anObject
	dificultad := anObject!

dificultad:unArray tipo: unTipo
	self posicion at:2 put: (unArray at: 1).
	self posicion at:3 put: (unArray at: 2).
	self dificultad: unTipo.
	!

displayString
	^self nombre!

final
	^final!

final: anObject
	final := anObject!

nombre
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

tieneFinal: aBoolean
	aBoolean
		ifTrue: 
			[self posicion at: 1 put: 0.
			self final: 'si']
		ifFalse:[self posicion at: 1 put: 1.
			self final: 'no']! !
!Gen categoriesFor: #dia!accessing!public! !
!Gen categoriesFor: #dia:!accessing!public! !
!Gen categoriesFor: #diaSemana:tipo:!public! !
!Gen categoriesFor: #dificultad!accessing!public! !
!Gen categoriesFor: #dificultad:!accessing!public! !
!Gen categoriesFor: #dificultad:tipo:!public! !
!Gen categoriesFor: #displayString!public! !
!Gen categoriesFor: #final!accessing!public! !
!Gen categoriesFor: #final:!accessing!public! !
!Gen categoriesFor: #nombre!public! !
!Gen categoriesFor: #nombre:!accessing!public! !
!Gen categoriesFor: #posicion!accessing!public! !
!Gen categoriesFor: #posicion:!accessing!public! !
!Gen categoriesFor: #tieneFinal:!public! !

!Gen class methodsFor!

new: unArray
	|gen|
	gen:= self new.
	gen posicion: unArray.
	^gen!

nombre
^self nombre! !
!Gen class categoriesFor: #new:!public! !
!Gen class categoriesFor: #nombre!public! !

