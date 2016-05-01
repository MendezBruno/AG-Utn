"Filed out from Dolphin Smalltalk 7"!

Model subclass: #AptitudValoracion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
AptitudValoracion guid: (GUID fromString: '{739A3F71-BF23-494C-9922-7A57F172BD1A}')!
AptitudValoracion comment: ''!
!AptitudValoracion categoriesForClass!MVP-Models! !
!AptitudValoracion methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen |acum := acum + (self convertir_a_decimal: gen)].
	^acum * 50!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum! !
!AptitudValoracion categoriesFor: #aptitudDe:!public! !
!AptitudValoracion categoriesFor: #convertir_a_decimal:!public! !

!AptitudValoracion class methodsFor!

aptitudDe: listaGenes
	| acum |
	acum := 0.
	listaGenes do: [:gen | acum := acum + (self convertir_a_decimal: gen)].
	^acum * 50!

convertir_a_decimal: unArray
	| iteracion acum |
	iteracion := 0.
	acum := 0.
	unArray do: 
			[:unValor |
			unValor = 1 ifTrue: [acum := acum + (2 ** iteracion)].
			iteracion := iteracion + 1].
	^acum! !
!AptitudValoracion class categoriesFor: #aptitudDe:!public! !
!AptitudValoracion class categoriesFor: #convertir_a_decimal:!public! !

