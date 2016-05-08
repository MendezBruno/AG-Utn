"Filed out from Dolphin Smalltalk 7"!

Model subclass: #AptitudSuperposicion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
AptitudSuperposicion guid: (GUID fromString: '{80BA86AB-DFA6-4F06-BC41-EAEF711C1C81}')!
AptitudSuperposicion comment: ''!
!AptitudSuperposicion categoriesForClass!MVP-Models! !
!AptitudSuperposicion methodsFor!

aptitudDe: listaGenes
"recibe los genes correspondientes a los dias de la semana"
	^(self genesIguales: listaGenes) * -125!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

genesIguales: listaGenes
	"los genes corresponden a los ultimas tres posiciones de cada materia"

	| listaNumeros |
	listaNumeros := OrderedCollection new.
	listaGenes do: [:gen | listaNumeros add: (self convertir_a_decimal: gen)].
	^listaNumeros size - listaNumeros asSet size! !
!AptitudSuperposicion categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion categoriesFor: #convertir_a_decimal:!public! !
!AptitudSuperposicion categoriesFor: #genesIguales:!public! !

!AptitudSuperposicion class methodsFor!

aptitudDe: listaGenes
^(self genesIguales:listaGenes)*-125


!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum!

genesIguales:listaGenes
|listaNumeros |
listaNumeros:= OrderedCollection new.
listaGenes do:[:gen| listaNumeros add: ( self convertir_a_decimal:gen)].
^(listaNumeros size)- (listaNumeros asSet size)
! !
!AptitudSuperposicion class categoriesFor: #aptitudDe:!public! !
!AptitudSuperposicion class categoriesFor: #convertir_a_decimal:!public! !
!AptitudSuperposicion class categoriesFor: #genesIguales:!public! !

