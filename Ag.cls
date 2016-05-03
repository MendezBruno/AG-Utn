"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Ag
	instanceVariableNames: 'poblacionInicial poblacion_seleccionada mutacion cruzamiento seleccion aptitud'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Ag guid: (GUID fromString: '{0418FE3E-735A-4CA4-8089-1D862A0B4BD0}')!
Ag comment: ''!
!Ag categoriesForClass!Unclassified! !
!Ag methodsFor!

aptitud
	^aptitud!

aptitud: anObject
	aptitud := anObject!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

cruzamiento
	^cruzamiento!

cruzamiento: anObject
	cruzamiento := anObject!

initialize
	self aptitud: Aptitud new.
	self seleccion: Torneo new.!

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

seleccion
	^seleccion!

seleccion: anObject
	seleccion := anObject! !
!Ag categoriesFor: #aptitud!accessing!public! !
!Ag categoriesFor: #aptitud:!accessing!public! !
!Ag categoriesFor: #convertir_a_decimal:!public! !
!Ag categoriesFor: #cruzamiento!accessing!public! !
!Ag categoriesFor: #cruzamiento:!accessing!public! !
!Ag categoriesFor: #initialize!public! !
!Ag categoriesFor: #mutacion!accessing!public! !
!Ag categoriesFor: #mutacion:!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada!accessing!public! !
!Ag categoriesFor: #poblacion_seleccionada:!accessing!public! !
!Ag categoriesFor: #poblacionInicial!accessing!public! !
!Ag categoriesFor: #poblacionInicial:!accessing!public! !
!Ag categoriesFor: #seleccion!accessing!public! !
!Ag categoriesFor: #seleccion:!accessing!public! !

!Ag class methodsFor!

new
	^super new initialize
! !
!Ag class categoriesFor: #new!public! !

