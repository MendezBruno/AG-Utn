"Filed out from Dolphin Smalltalk X6"!

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
	cromosoma1 := Cromosoma new.
	cromosoma1 genes add: (Gen new: #(1 0 1 0 0 1)).
	cromosoma1 genes add: (Gen new: #(1 1 0 0 1 0)).
	cromosoma1 genes add: (Gen new: #(0 1 1 0 1 1)).
	cromosoma2 := Cromosoma new.
	cromosoma2 genes add: (Gen new: #(1 0 0 1 0 0)).
	cromosoma2 genes add: (Gen new: #(0 0 1 0 1 1)).
	cromosoma2 genes add: (Gen new: #(1 0 1 1 1 1)).
	poblacion cromosomas add: cromosoma1.
	poblacion cromosomas add: cromosoma2.! !
!PoblacionTest categoriesFor: #setUp!public! !

