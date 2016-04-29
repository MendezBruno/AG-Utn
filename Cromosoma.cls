"Filed out from Dolphin Smalltalk 7"!

Model subclass: #Cromosoma
	instanceVariableNames: 'genes'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Cromosoma guid: (GUID fromString: '{A176475E-F6E0-43D0-BF7F-1D2D90E925A1}')!
Cromosoma comment: ''!
!Cromosoma categoriesForClass!Unclassified! !
!Cromosoma methodsFor!

genes
	^genes!

genes: anObject
	genes := anObject!

initialize
	self genes: OrderedCollection new.! !
!Cromosoma categoriesFor: #genes!accessing!private! !
!Cromosoma categoriesFor: #genes:!accessing!private! !
!Cromosoma categoriesFor: #initialize!public! !

!Cromosoma class methodsFor!

initialize
	self genes: OrderedCollection new.!

new
	^super new initialize
! !
!Cromosoma class categoriesFor: #initialize!public! !
!Cromosoma class categoriesFor: #new!public! !

