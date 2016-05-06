"Filed out from Dolphin Smalltalk 7"!

TestCase subclass: #PoblacionTest
	instanceVariableNames: 'poblacion'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
PoblacionTest guid: (GUID fromString: '{D1FEE66A-C0B9-4C71-84FC-C0D40E78CDD6}')!
PoblacionTest comment: ''!
!PoblacionTest categoriesForClass!Unclassified! !
!PoblacionTest methodsFor!

setUp
	| cromosoma1 cromosoma2 |
	poblacion := Poblacion new.
	cromosoma1 := Gen new.
	cromosoma1 carateristicas add: (Caracteristica new: #(1 0 1 0 0 1)).
	cromosoma1 carateristicas add: (Caracteristica new: #(1 1 0 0 1 0)).
	cromosoma1 carateristicas add: (Caracteristica new: #(0 1 1 0 1 1)).
	cromosoma2 := Gen new.
	cromosoma2 carateristicas add: (Caracteristica new: #(1 0 0 1 0 0)).
	cromosoma2 carateristicas add: (Caracteristica new: #(0 0 1 0 1 1)).
	cromosoma2 carateristicas add: (Caracteristica new: #(1 0 1 1 1 1)).
	poblacion cromosomas add: cromosoma1.
	poblacion cromosomas add: cromosoma2! !
!PoblacionTest categoriesFor: #setUp!public! !

