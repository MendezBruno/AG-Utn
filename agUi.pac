| package |
package := Package name: 'agUi'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #ShellAg;
	add: #ShellAgPresenter;
	add: #ShellCargarPoblacion;
	add: #ShellCargarPoblacionPresenter;
	add: #ShellPoblacionActualPresenter;
	add: #ShellViewPoblacionActual;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Boolean\Dolphin Boolean Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Models\List\Dolphin List Models';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\List\Dolphin List Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Base\Dolphin MVP Base';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Text\Dolphin Text Presenter';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Type Converters\Dolphin Type Converters';
	add: '..\..\Users\bruno\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Models\Value\Dolphin Value Models';
	yourself).

package!

"Class Definitions"!

Shell subclass: #ShellAgPresenter
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Shell subclass: #ShellCargarPoblacionPresenter
	instanceVariableNames: 'ctrlNombreMateria ctrlCheckBoxFinal ctrlComboBoxDificultad ctrlComboBoxDiaSemana elemDificultad elemDiaSemana'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Shell subclass: #ShellPoblacionActualPresenter
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellAg
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellCargarPoblacion
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
ShellView subclass: #ShellViewPoblacionActual
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

ShellAgPresenter guid: (GUID fromString: '{14950F2D-C825-4003-9B6D-216844DCC40F}')!
ShellAgPresenter comment: ''!
!ShellAgPresenter categoriesForClass!MVP-Presenters! !
!ShellAgPresenter methodsFor!

cargarPoblacionShell
	ShellCargarPoblacionPresenter showOn: self model.! !
!ShellAgPresenter categoriesFor: #cargarPoblacionShell!public! !

!ShellAgPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 551 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 1 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2719 21 738 1201 801 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 167 7 0 0 154 1 0 0] 98 2 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 788230 ##(Smalltalk.BorderLayout) 1 1 410 896 98 15 0 880 98 2 8 1140850688 131073 992 0 0 0 7 0 0 0 992 530 234 240 576 32 234 256 576 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 1 610 202 208 98 1 674 704 98 2 738 1 1 738 1169 139 992 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 69 0 0 0] 98 1 410 8 ##(Smalltalk.StaticText) 98 16 0 992 98 2 8 1140850945 65 1328 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[229 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1328 0 8 4294904093 852486 ##(Smalltalk.NullConverter) 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 1169 99 1328 674 8 #text: 98 1 8 'Algoritmo Genético' 1328 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 72 2 0 0 69 0 0 0] 98 0 738 193 193 0 27 1776 0 27 0 0 0 410 896 98 15 0 880 98 2 8 1140850688 131073 1792 0 0 0 7 0 0 0 1792 530 234 240 576 32 234 256 576 1106 738 1 121 738 1 21 610 202 208 98 1 674 704 98 2 738 1 139 738 1169 223 1792 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 69 0 0 0 72 2 0 0 180 0 0 0] 98 1 410 1344 98 16 0 1792 98 2 8 1140850945 65 2112 0 0 0 7 0 0 0 2112 0 8 4294904093 1522 0 0 0 610 202 208 98 2 674 704 98 2 738 1 121 738 1169 83 2112 674 1680 98 1 8 'Este programa resuelve esta hecho para la catedra ble, resuelve un ble, de manera ble' 2112 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 0 0 0 72 2 0 0 101 0 0 0] 98 0 1776 0 27 1776 0 27 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 1 738 1169 361 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 180 0 0 0] 98 2 992 1792 1776 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2592 0 0 0 7 0 0 0 2592 530 234 240 576 16 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 361 738 1169 363 2592 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 180 0 0 0 72 2 0 0 105 1 0 0] 98 4 410 8 ##(Smalltalk.PushButton) 98 20 0 2592 98 2 8 1140924416 1 2864 0 0 0 7 0 0 0 2864 0 8 4294904113 1180998 4 ##(Smalltalk.CommandDescription) 8 #cargarPoblacionShell 8 'Cargar Población' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 1 738 1169 91 2864 674 1680 98 1 8 'Cargar Población' 2864 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 72 2 0 0 45 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3232 0 0 0 7 0 0 0 3232 0 8 4294904113 2962 8 #verPoblacionActualShell 8 'Ver Población Actual' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 91 738 1169 91 3232 674 1680 98 1 8 'Ver Población Actual' 3232 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 45 0 0 0 72 2 0 0 90 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3568 0 0 0 7 0 0 0 3568 0 8 4294904113 2962 8 #correrAlgoritmoShell 8 'Correr Algoritmo' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 181 738 1169 91 3568 674 1680 98 1 8 'Correr Algoritmo' 3568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 90 0 0 0 72 2 0 0 135 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3904 0 0 0 7 0 0 0 3904 0 8 4294904113 2962 3664 8 'Ver Crédito' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 271 738 1169 93 3904 674 1680 98 1 8 'Ver Crédito' 3904 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 135 0 0 0 72 2 0 0 181 0 0 0] 98 0 1776 0 29 1776 0 27 1776 0 27 )! !
!ShellAgPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCargarPoblacionPresenter guid: (GUID fromString: '{D9432469-4DE6-4C08-9897-4AACBA58656E}')!
ShellCargarPoblacionPresenter comment: ''!
!ShellCargarPoblacionPresenter categoriesForClass!MVP-Presenters! !
!ShellCargarPoblacionPresenter methodsFor!

cargaDiaSemana
	self elemDiaSemana: Dictionary new.
	elemDiaSemana at: 'Lunes' put: #(0 0 1).
	elemDiaSemana at: 'Martes' put: #(0 1 0).
	elemDiaSemana at: 'Miercoles' put: #(0 1 1).
	elemDiaSemana at: 'Jueves' put: #(1 0 0).
	elemDiaSemana at: 'Viernes' put: #(1 0 0).
	elemDiaSemana at: 'Sabado' put: #(1 0 0)!

cargarCombos

" Cargar dificultad"
	self ctrlComboBoxDificultad list add: 'Dificil'.
	self ctrlComboBoxDificultad list add: 'Moderada'.
	self ctrlComboBoxDificultad list add: 'Facil'.
	self ctrlComboBoxDificultad list add: 'Muy Facil'.

"Cargar Dias de la semana"
	self ctrlComboBoxDiaSemana list add: 'Lunes'.
	self ctrlComboBoxDiaSemana list add: 'Martes'.
	self ctrlComboBoxDiaSemana list add: 'Miercoles'.
	self ctrlComboBoxDiaSemana list add: 'Jueves'.
	self ctrlComboBoxDiaSemana list add: 'Viernes'.
	self ctrlComboBoxDiaSemana list add: 'Sabado'!

cargarDificultad
	self elemDificultad: Dictionary new.
	elemDificultad at: 'Dificil' put: #(1 1).
	elemDificultad at: 'Moderada' put: #(1 0).
	elemDificultad at: 'Facil' put: #(0 1).
	elemDificultad at: 'Muy Facil' put: #(0 0)!

createComponents
	super createComponents.
	ctrlNombreMateria := self add: TextPresenter new name: 'textBoxNombreMateria'.
	ctrlCheckBoxFinal:= self add: BooleanPresenter new name: 'checkBoxFinal'.
	ctrlComboBoxDificultad:= self add: ListPresenter new name: 'comboBoxDificultad'.
	ctrlComboBoxDiaSemana:= self add: ListPresenter new name: 'comboBoxDiaSemana'.

	self cargarCombos.!

ctrlCheckBoxFinal
	^ctrlCheckBoxFinal!

ctrlCheckBoxFinal: anObject
	ctrlCheckBoxFinal := anObject!

ctrlComboBoxDiaSemana
	^ctrlComboBoxDiaSemana!

ctrlComboBoxDiaSemana: anObject
	ctrlComboBoxDiaSemana := anObject!

ctrlComboBoxDificultad
	^ctrlComboBoxDificultad!

ctrlComboBoxDificultad: anObject
	ctrlComboBoxDificultad := anObject!

ctrlNombreMateria
	^ctrlNombreMateria!

ctrlNombreMateria: anObject
	ctrlNombreMateria := anObject!

elemDiaSemana
	^elemDiaSemana!

elemDiaSemana: anObject
	elemDiaSemana := anObject!

elemDificultad
	^elemDificultad!

elemDificultad: anObject
	elemDificultad := anObject!

guardarMateria
	| auxGen |
	auxGen := self model crearGen: ctrlNombreMateria value.
	auxGen tieneFinal: ctrlCheckBoxFinal value.
	auxGen dificultad: (self elemDificultad at: ctrlComboBoxDificultad selection).
	auxGen diaSemana: (self elemDiaSemana at: ctrlComboBoxDiaSemana selection).
	self model agregarGen: auxGen.!

onViewOpened
	super onViewOpened.
	self cargarDificultad.
	self cargaDiaSemana
	
	
	! !
!ShellCargarPoblacionPresenter categoriesFor: #cargaDiaSemana!public! !
!ShellCargarPoblacionPresenter categoriesFor: #cargarCombos!public! !
!ShellCargarPoblacionPresenter categoriesFor: #cargarDificultad!public! !
!ShellCargarPoblacionPresenter categoriesFor: #createComponents!public! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlCheckBoxFinal!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlCheckBoxFinal:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDiaSemana!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDiaSemana:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDificultad!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlComboBoxDificultad:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlNombreMateria!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #ctrlNombreMateria:!accessing!private! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDiaSemana!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDiaSemana:!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDificultad!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #elemDificultad:!accessing!public! !
!ShellCargarPoblacionPresenter categoriesFor: #guardarMateria!public! !
!ShellCargarPoblacionPresenter categoriesFor: #onViewOpened!public! !

!ShellCargarPoblacionPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 13219 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2731 21 738 721 801 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 85 5 0 0 10 0 0 0 189 6 0 0 154 1 0 0] 98 5 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 530 234 240 576 32 234 256 98 2 410 8 ##(Smalltalk.TextEdit) 98 16 0 880 98 2 8 1140916352 1025 1024 0 482 8 4278190080 0 7 0 0 0 1024 0 8 4294902755 852486 ##(Smalltalk.NullConverter) 0 0 1 610 202 208 98 3 674 704 98 2 738 355 41 738 355 69 1024 674 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 1024 674 8 #isTextModified: 98 1 32 1024 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 20 0 0 0 98 1 0 0 54 0 0 0] 98 0 738 193 193 0 27 8 'textBoxNombreMateria' 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 41 610 202 208 98 1 674 704 98 2 738 1 1 738 709 149 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 98 1 0 0 74 0 0 0] 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 880 98 2 8 1140850944 65 1728 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1728 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 355 69 1728 674 8 #text: 98 1 8 'Nombre de la materia:' 1728 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 177 0 0 0 54 0 0 0] 98 0 1472 0 27 1024 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2160 0 0 0 7 0 0 0 2160 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 1744 98 16 0 2160 98 2 8 1140850944 65 2256 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 2256 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 345 69 2256 674 2064 98 1 8 'Tiene Final?' 2256 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 54 0 0 0] 98 0 1472 0 27 410 8 ##(Smalltalk.CheckBox) 98 16 0 2160 98 2 8 1409363203 1 2624 721990 2 ##(Smalltalk.ValueHolder) 0 0 1114118 ##(Smalltalk.NeverSearchPolicy) 32 0 0 7 0 0 0 2624 0 8 4294903029 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 345 41 738 365 69 2624 674 2064 98 1 8 'Sí' 2624 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 98 1 0 0 54 0 0 0] 98 0 1472 0 27 234 256 98 2 2624 8 'checkBoxFinal' 1506 738 1 41 738 1 41 610 202 208 98 1 674 704 98 2 738 1 149 738 709 149 2160 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 74 0 0 0 98 1 0 0 148 0 0 0] 98 2 2256 2624 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 3264 0 0 0 7 0 0 0 3264 0 234 256 98 2 410 8 ##(Smalltalk.ComboBox) 98 17 0 3264 98 2 8 1412498947 1025 3360 590662 2 ##(Smalltalk.ListModel) 202 208 576 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 3360 0 8 4294902769 459270 ##(Smalltalk.Message) 8 #displayString 98 0 576 401 610 202 208 98 1 674 704 98 2 738 345 33 738 341 53 3360 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 16 0 0 0 86 1 0 0 42 0 0 0] 98 0 1472 0 27 8 'comboBoxDificultad' 0 610 202 208 98 1 674 704 98 2 738 1 297 738 709 149 3264 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 148 0 0 0 98 1 0 0 222 0 0 0] 98 2 410 1744 98 16 0 3264 98 2 8 1140850944 65 3968 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 3968 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 5 33 738 251 51 3968 674 2064 98 1 8 'Dificultad:' 3968 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 2 0 0 0 16 0 0 0 127 0 0 0 41 0 0 0] 98 0 1472 0 27 3360 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 4336 0 0 0 7 0 0 0 4336 0 234 256 98 2 410 3376 98 17 0 4336 98 2 8 1412498947 1025 4432 3442 202 208 576 0 3504 482 3536 0 7 0 0 0 4432 0 8 4294902769 3570 3600 98 0 576 401 610 202 208 98 1 674 704 98 2 738 345 31 738 341 53 4432 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 15 0 0 0 86 1 0 0 41 0 0 0] 98 0 1472 0 27 8 'comboBoxDiaSemana' 0 610 202 208 98 1 674 704 98 2 738 1 445 738 709 149 4336 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 222 0 0 0 98 1 0 0 40 1 0 0] 98 2 410 1744 98 16 0 4336 98 2 8 1140850944 65 4928 0 0 0 7 0 1810 0 16 1842 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 4928 0 8 4294903325 1154 0 0 0 610 202 208 98 2 674 704 98 2 738 11 31 738 241 39 4928 674 2064 98 1 8 'Día de la semana:' 4928 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 15 0 0 0 125 0 0 0 34 0 0 0] 98 0 1472 0 27 4432 1472 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 5296 0 0 0 7 0 0 0 5296 530 234 240 576 32 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 593 738 709 151 5296 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 40 1 0 0 98 1 0 0 115 1 0 0] 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 5296 98 2 8 1140924416 1 5568 0 0 0 7 0 0 0 5568 0 8 4294903029 1180998 4 ##(Smalltalk.CommandDescription) 8 #guardarMateria 8 'Guardar' 1 1 0 0 16 0 0 0 610 202 208 98 3 674 704 98 2 738 1 1 738 355 151 5568 674 8 #isEnabled: 98 1 32 5568 674 2064 98 1 8 'Guardar' 5568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 177 0 0 0 75 0 0 0] 98 0 1472 0 29 410 5584 98 20 0 5296 98 2 8 1140924416 1 5984 0 0 0 7 0 0 0 5984 0 8 4294903029 5666 8 #cancel 8 '&Cancelar' 1 1 0 0 32 0 0 0 610 202 208 98 3 674 704 98 2 738 355 1 738 355 151 5984 674 5856 98 1 32 5984 674 2064 98 1 8 '&Cancelar' 5984 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 177 0 0 0 0 0 0 0 98 1 0 0 75 0 0 0] 98 0 1472 0 29 1472 0 27 1472 0 27 )! !
!ShellCargarPoblacionPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellPoblacionActualPresenter guid: (GUID fromString: '{F5AC67BD-7BDE-4475-82F8-E5031EC3631A}')!
ShellPoblacionActualPresenter comment: ''!
!ShellPoblacionActualPresenter categoriesForClass!MVP-Presenters! !
!ShellPoblacionActualPresenter class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellView) 98 27 0 0 98 2 26214401 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 560 0 0 0 7 0 0 0 560 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 688 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 1 850 321 723 560 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 105 1 0 0] 98 1 410 8 ##(Smalltalk.ListBox) 98 17 0 560 98 2 8 1412497665 1025 960 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 960 0 8 4294904461 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 32 722 202 208 98 2 786 816 98 2 850 1 1 850 321 723 960 786 8 #horizontalExtent: 98 1 1 960 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 105 1 0 0] 98 0 850 193 193 0 27 1440 0 27 410 576 98 15 0 416 98 2 8 1140850688 131073 1456 0 0 0 7 0 0 0 1456 530 1 1 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 1536 0 0 0 7 0 0 0 1536 642 234 240 688 32 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 633 850 519 91 1536 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 1 0 0 3 1 0 0 105 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1536 98 2 8 1140924416 1 1808 0 0 0 7 0 0 0 1808 0 8 4294904113 1180998 4 ##(Smalltalk.CommandDescription) 8 #borrarMateria 8 'Borrar' 1 1 0 0 16 0 0 0 722 202 208 98 3 786 816 98 2 850 1 1 850 519 91 1808 786 8 #isEnabled: 98 1 32 1808 786 8 #text: 98 1 8 'Borrar' 1808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 45 0 0 0] 98 0 1440 0 29 1440 0 27 0 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 2240 0 0 0 7 0 0 0 2240 642 234 240 688 16 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 1 850 519 633 2240 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 60 1 0 0] 98 4 410 576 98 15 0 2240 98 2 8 1140850688 131073 2512 0 0 0 7 0 0 0 2512 642 234 240 688 32 234 256 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 2512 98 2 8 1140850945 65 2640 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 2640 0 8 4294904093 852486 ##(Smalltalk.NullConverter) 0 0 0 722 202 208 98 2 786 816 98 2 850 269 41 850 251 79 2640 786 2144 98 1 8 'nombre' 2640 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 59 0 0 0] 98 0 1440 0 27 8 'labelNombreMateria' 590342 ##(Smalltalk.Rectangle) 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 1 850 519 159 2512 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 3 1 0 0 79 0 0 0] 98 2 410 2656 98 16 0 2512 98 2 8 1140850944 65 3312 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3312 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 249 79 3312 786 2144 98 1 8 'Nombre de la materia:' 3312 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 59 0 0 0] 98 0 1440 0 27 2640 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 3680 0 0 0 7 0 0 0 3680 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 3680 98 2 8 1140850945 65 3808 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3808 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 269 41 850 251 119 3808 786 2144 98 1 8 'dificultad' 3808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 79 0 0 0] 98 0 1440 0 27 8 'labelDificultad' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 159 850 519 159 3680 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 79 0 0 0 3 1 0 0 158 0 0 0] 98 2 410 2656 98 16 0 3680 98 2 8 1140850944 65 4400 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 4400 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 249 119 4400 786 2144 98 1 8 'Dificultad:' 4400 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 79 0 0 0] 98 0 1440 0 27 3808 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 4768 0 0 0 7 0 0 0 4768 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 4768 98 2 8 1140850945 65 4896 0 0 0 7 0 0 0 4896 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 269 41 850 251 79 4896 786 2144 98 1 8 'SioNo' 4896 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 59 0 0 0] 98 0 1440 0 27 8 'labelTieneFinal' 3090 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 317 850 519 159 4768 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 158 0 0 0 3 1 0 0 237 0 0 0] 98 2 410 2656 98 16 0 4768 98 2 8 1140850944 65 5424 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 5424 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 249 79 5424 786 2144 98 1 8 'Tiene Final?' 5424 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 59 0 0 0] 98 0 1440 0 27 4896 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 5792 0 0 0 7 0 0 0 5792 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 5792 98 2 8 1140850945 65 5920 0 0 0 7 0 0 0 5920 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 269 41 850 251 119 5920 786 2144 98 1 8 'unDia' 5920 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 134 0 0 0 20 0 0 0 3 1 0 0 79 0 0 0] 98 0 1440 0 27 8 'labelDiaSemana' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 475 850 519 159 5792 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 237 0 0 0 3 1 0 0 60 1 0 0] 98 2 410 2656 98 16 0 5792 98 2 8 1140850944 65 6448 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 6448 0 8 4294904093 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 249 119 6448 786 2144 98 1 8 'Día de la semana:' 6448 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 134 0 0 0 79 0 0 0] 98 0 1440 0 27 5920 1440 0 27 1440 0 27 234 256 688 0 722 202 208 98 1 786 816 98 2 850 321 1 850 519 723 1456 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 160 0 0 0 0 0 0 0 163 1 0 0 105 1 0 0] 98 2 2240 1536 1440 0 27 234 256 688 0 0 0 0 0 10491 0 0 0 0 1 0 0 722 202 208 98 2 786 816 98 2 850 2719 21 850 871 801 416 786 8 #updateMenuBar 688 416 898 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 2 7 0 0 154 1 0 0] 98 2 560 1456 1440 0 27 )! !
!ShellPoblacionActualPresenter class categoriesFor: #resource_Default_view!public!resources-views! !

ShellAg guid: (GUID fromString: '{2B06A607-E056-4008-80AF-6695E0AC7FF9}')!
ShellAg comment: ''!
!ShellAg categoriesForClass!MVP-Views! !
!ShellAg methodsFor!

cargarPoblacionShell
	ShellCargarPoblacion modalOn: self model.!

correrAlgoritmoShell!

verPoblacionActualShell! !
!ShellAg categoriesFor: #cargarPoblacionShell!public! !
!ShellAg categoriesFor: #correrAlgoritmoShell!public! !
!ShellAg categoriesFor: #verPoblacionActualShell!public! !

!ShellAg class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellAg) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 16 234 256 576 0 0 0 0 0 1 0 0 0 0 1 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 2 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 2719 21 738 981 1021 416 674 8 #updateMenuBar 576 416 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 57 7 0 0 8 2 0 0] 98 2 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 880 0 0 0 7 0 0 0 880 788230 ##(Smalltalk.BorderLayout) 1 1 410 896 98 15 0 880 98 2 8 1140850688 131073 992 0 0 0 7 0 0 0 992 530 234 240 576 32 234 256 576 590342 ##(Smalltalk.Rectangle) 738 1 41 738 1 1 610 202 208 98 1 674 704 98 2 738 1 1 738 949 139 992 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 69 0 0 0] 98 1 410 8 ##(Smalltalk.StaticText) 98 16 0 992 98 2 8 1140850945 65 1328 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[229 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 738 193 193 0 1328 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 610 202 208 98 2 674 704 98 2 738 1 41 738 949 99 1328 674 8 #text: 98 1 8 'Algoritmo Genético' 1328 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 218 1 0 0 69 0 0 0] 98 0 738 193 193 0 27 1776 0 27 0 0 0 410 896 98 15 0 880 98 2 8 1140850688 131073 1792 0 0 0 7 0 0 0 1792 530 234 240 576 32 234 256 576 1106 738 1 121 738 1 21 610 202 208 98 1 674 704 98 2 738 1 139 738 949 333 1792 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 69 0 0 0 218 1 0 0 235 0 0 0] 98 1 410 1344 98 16 0 1792 98 2 8 1140850945 65 2112 0 0 0 7 0 0 0 2112 0 8 4294903063 1522 0 0 0 610 202 208 98 2 674 704 98 2 738 1 121 738 949 193 2112 674 1680 98 1 8 'Este programa resuelve esta hecho para la catedra ble, resuelve un ble, de manera ble' 2112 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 60 0 0 0 218 1 0 0 156 0 0 0] 98 0 1776 0 27 1776 0 27 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 1 738 949 471 880 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 235 0 0 0] 98 2 992 1792 1776 0 27 410 896 98 15 0 416 98 2 8 1140850688 131073 2592 0 0 0 7 0 0 0 2592 530 234 240 576 16 234 256 576 0 610 202 208 98 1 674 704 98 2 738 1 471 738 949 473 2592 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 235 0 0 0 218 1 0 0 215 1 0 0] 98 4 410 8 ##(Smalltalk.PushButton) 98 20 0 2592 98 2 8 1140924416 1 2864 0 0 0 7 0 0 0 2864 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #cargarPoblacionShell 8 'Cargar Población' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 1 738 949 119 2864 674 1680 98 1 8 'Cargar Población' 2864 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 218 1 0 0 59 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3232 0 0 0 7 0 0 0 3232 0 8 4294903051 2962 8 #verPoblacionActualShell 8 'Ver Población Actual' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 119 738 949 119 3232 674 1680 98 1 8 'Ver Población Actual' 3232 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 59 0 0 0 218 1 0 0 118 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3568 0 0 0 7 0 0 0 3568 0 8 4294903051 2962 8 #correrAlgoritmoShell 8 'Correr Algoritmo' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 237 738 949 119 3568 674 1680 98 1 8 'Correr Algoritmo' 3568 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 118 0 0 0 218 1 0 0 177 0 0 0] 98 0 1776 0 29 410 2880 98 20 0 2592 98 2 8 1140924416 1 3904 0 0 0 7 0 0 0 3904 0 8 4294903051 2962 3664 8 'Ver Crédito' 1 1 0 0 32 0 0 0 610 202 208 98 2 674 704 98 2 738 1 355 738 949 119 3904 674 1680 98 1 8 'Ver Crédito' 3904 818 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 177 0 0 0 218 1 0 0 236 0 0 0] 98 0 1776 0 29 1776 0 27 1776 0 27 )! !
!ShellAg class categoriesFor: #resource_Default_view!public!resources-views! !

ShellCargarPoblacion guid: (GUID fromString: '{4C589BDE-0251-44F4-B4B8-58230CACA096}')!
ShellCargarPoblacion comment: ''!
!ShellCargarPoblacion categoriesForClass!MVP-Views! !
!ShellCargarPoblacion class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellCargarPoblacion) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 4 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 592 0 0 0 7 0 0 0 592 0 234 256 98 0 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 277 834 689 133 592 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 138 0 0 0 88 1 0 0 204 0 0 0] 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 592 98 2 8 1140850944 65 944 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 834 193 193 0 944 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 706 202 208 98 2 770 800 98 2 834 5 33 834 251 51 944 770 8 #text: 98 1 8 'Dificultad:' 944 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 2 0 0 0 16 0 0 0 127 0 0 0 41 0 0 0] 98 0 834 193 193 0 27 410 8 ##(Smalltalk.ComboBox) 98 17 0 592 98 2 8 1412498947 1025 1408 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 1408 0 8 4294903067 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 401 706 202 208 98 1 770 800 98 2 834 345 33 834 341 53 1408 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 16 0 0 0 86 1 0 0 42 0 0 0] 98 0 1392 0 27 1392 0 27 524806 ##(Smalltalk.Fraction) 67 69 410 608 98 15 0 416 98 2 8 1140850688 131073 1872 0 0 0 7 0 0 0 1872 530 234 240 688 32 234 256 688 590342 ##(Smalltalk.Rectangle) 834 1 41 834 1 41 706 202 208 98 1 770 800 98 2 834 1 1 834 689 141 1872 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 88 1 0 0 70 0 0 0] 98 2 410 960 98 16 0 1872 98 2 8 1140850944 65 2208 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 834 193 193 0 2208 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 1 41 834 345 61 2208 770 1296 98 1 8 'Nombre de la materia:' 2208 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 50 0 0 0] 98 0 1392 0 27 410 8 ##(Smalltalk.TextEdit) 98 16 0 1872 98 2 8 1140916352 1025 2576 0 482 8 4278190080 0 7 0 0 0 2576 0 8 4294903069 1138 0 0 1 706 202 208 98 3 770 800 98 2 834 345 41 834 345 61 2576 770 8 #selectionRange: 98 1 525062 ##(Smalltalk.Interval) 3 1 3 2576 770 8 #isTextModified: 98 1 32 2576 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 88 1 0 0 50 0 0 0] 98 0 1392 0 27 1392 0 27 1842 71 69 16 234 256 688 0 0 0 0 0 16963 0 0 0 0 1 0 0 706 202 208 98 3 770 800 98 2 834 2719 21 834 721 761 416 770 1296 98 1 8 'Algoritmo Genético - Cargar Población' 416 770 8 #updateMenuBar 688 416 882 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 183 6 0 0 134 1 0 0] 98 5 1872 410 608 98 15 0 416 98 2 8 1140850688 131073 3280 0 0 0 7 0 0 0 3280 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 960 98 16 0 3280 98 2 8 1140850944 65 3376 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 2320 0 3376 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 1 41 834 345 57 3376 770 1296 98 1 8 'Tiene Final?' 3376 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 20 0 0 0 172 0 0 0 48 0 0 0] 98 0 1392 0 27 410 8 ##(Smalltalk.CheckBox) 98 16 0 3280 98 2 8 1409363203 1 3728 721990 2 ##(Smalltalk.ValueHolder) 0 0 1114118 ##(Smalltalk.NeverSearchPolicy) 32 0 0 7 0 0 0 3728 0 8 4294903051 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 345 41 834 345 57 3728 770 1296 98 1 8 'Sí' 3728 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 20 0 0 0 88 1 0 0 48 0 0 0] 98 0 1392 0 27 234 256 688 1986 834 1 41 834 1 41 706 202 208 98 1 770 800 98 2 834 1 141 834 689 137 3280 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 70 0 0 0 88 1 0 0 138 0 0 0] 98 2 3376 3728 1392 0 27 592 410 608 98 15 0 416 98 2 8 1140850688 131073 4336 0 0 0 7 0 0 0 4336 0 234 256 688 0 706 202 208 98 1 770 800 98 2 834 1 409 834 689 137 4336 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 204 0 0 0 88 1 0 0 16 1 0 0] 98 2 410 960 98 16 0 4336 98 2 8 1140850944 65 4576 0 0 0 7 0 1026 0 16 1058 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 1104 0 4576 0 8 4294903063 1138 0 0 0 706 202 208 98 2 770 800 98 2 834 11 31 834 241 39 4576 770 1296 98 1 8 'Día de la semana:' 4576 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 5 0 0 0 15 0 0 0 125 0 0 0 34 0 0 0] 98 0 1392 0 27 410 1424 98 17 0 4336 98 2 8 1412498947 1025 4928 1490 202 208 688 0 1552 482 1584 0 7 0 0 0 4928 0 8 4294903067 1618 1648 98 0 688 401 706 202 208 98 1 770 800 98 2 834 345 31 834 341 53 4928 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 15 0 0 0 86 1 0 0 41 0 0 0] 98 0 1392 0 27 1392 0 27 410 608 98 15 0 416 98 2 8 1140850688 131073 5248 0 0 0 7 0 0 0 5248 530 234 240 688 32 234 256 688 0 706 202 208 98 1 770 800 98 2 834 1 545 834 689 139 5248 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 16 1 0 0 88 1 0 0 85 1 0 0] 98 2 410 8 ##(Smalltalk.PushButton) 98 20 0 5248 98 2 8 1140924416 1 5520 0 0 0 7 0 0 0 5520 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #guardarMateria 8 'Guardar' 1 1 0 0 16 0 0 0 706 202 208 98 3 770 800 98 2 834 1 1 834 345 139 5520 770 8 #isEnabled: 98 1 32 5520 770 1296 98 1 8 'Guardar' 5520 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 172 0 0 0 69 0 0 0] 98 0 1392 0 29 410 5536 98 20 0 5248 98 2 8 1140924416 1 5936 0 0 0 7 0 0 0 5936 0 8 4294903051 5618 8 #cancel 8 '&Cancelar' 1 1 0 0 32 0 0 0 706 202 208 98 3 770 800 98 2 834 345 1 834 345 139 5936 770 5808 98 1 32 5936 770 1296 98 1 8 '&Cancelar' 5936 882 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 172 0 0 0 0 0 0 0 88 1 0 0 69 0 0 0] 98 0 1392 0 29 1392 0 27 1392 0 27 )! !
!ShellCargarPoblacion class categoriesFor: #resource_Default_view!public!resources-views! !

ShellViewPoblacionActual guid: (GUID fromString: '{BB014510-29C6-4570-983D-198D5D2C2850}')!
ShellViewPoblacionActual comment: ''!
!ShellViewPoblacionActual categoriesForClass!MVP-Views! !
!ShellViewPoblacionActual class methodsFor!

resource_Default_view
	"Answer the literal data from which the 'Default view' resource can be reconstituted.
	DO NOT EDIT OR RECATEGORIZE THIS METHOD.

	If you wish to modify this resource evaluate:
	ViewComposer openOn: (ResourceIdentifier class: self selector: #resource_Default_view)
	"

	^#(#'!!STL' 3 788558 10 ##(Smalltalk.STBViewProxy) 8 ##(Smalltalk.ShellViewPoblacionActual) 98 27 0 0 98 2 27131905 131073 416 0 524550 ##(Smalltalk.ColorRef) 8 4278190080 0 39 0 0 0 416 788230 ##(Smalltalk.BorderLayout) 1 1 0 0 0 410 8 ##(Smalltalk.ContainerView) 98 15 0 416 98 2 8 1140850688 131073 560 0 0 0 7 0 0 0 560 1180166 ##(Smalltalk.ProportionalLayout) 234 240 98 0 32 234 256 688 0 983302 ##(Smalltalk.MessageSequence) 202 208 98 1 721670 ##(Smalltalk.MessageSend) 8 #createAt:extent: 98 2 328198 ##(Smalltalk.Point) 1 1 850 321 943 560 983302 ##(Smalltalk.WINDOWPLACEMENT) 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 215 1 0 0] 98 1 410 8 ##(Smalltalk.ListBox) 98 17 0 560 98 2 8 1412497665 1025 960 590662 2 ##(Smalltalk.ListModel) 202 208 688 0 1310726 ##(Smalltalk.IdentitySearchPolicy) 482 8 4278190080 0 7 0 0 0 960 0 8 4294903315 459270 ##(Smalltalk.Message) 8 #displayString 98 0 688 32 722 202 208 98 2 786 816 98 2 850 1 1 850 321 943 960 786 8 #horizontalExtent: 98 1 1 960 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 160 0 0 0 215 1 0 0] 98 0 850 193 193 0 27 1440 0 27 410 576 98 15 0 416 98 2 8 1140850688 131073 1456 0 0 0 7 0 0 0 1456 530 1 1 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 1536 0 0 0 7 0 0 0 1536 642 234 240 688 32 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 853 850 559 91 1536 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 170 1 0 0 23 1 0 0 215 1 0 0] 98 1 410 8 ##(Smalltalk.PushButton) 98 20 0 1536 98 2 8 1140924416 1 1808 0 0 0 7 0 0 0 1808 0 8 4294903051 1180998 4 ##(Smalltalk.CommandDescription) 8 #borrarMateria 8 'Borrar' 1 1 0 0 16 0 0 0 722 202 208 98 3 786 816 98 2 850 1 1 850 559 91 1808 786 8 #isEnabled: 98 1 32 1808 786 8 #text: 98 1 8 'Borrar' 1808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 45 0 0 0] 98 0 1440 0 29 1440 0 27 0 0 410 576 98 15 0 1456 98 2 8 1140850688 131073 2240 0 0 0 7 0 0 0 2240 642 234 240 688 16 234 256 688 0 722 202 208 98 1 786 816 98 2 850 1 1 850 559 853 2240 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 170 1 0 0] 98 4 410 576 98 15 0 2240 98 2 8 1140850688 131073 2512 0 0 0 7 0 0 0 2512 642 234 240 688 32 234 256 98 2 410 8 ##(Smalltalk.StaticText) 98 16 0 2512 98 2 8 1140850945 65 2640 0 0 0 7 0 263174 ##(Smalltalk.Font) 0 16 459014 ##(Smalltalk.LOGFONT) 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 2640 0 8 4294903063 852486 ##(Smalltalk.NullConverter) 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 133 2640 786 2144 98 1 8 'nombre' 2640 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 86 0 0 0] 98 0 1440 0 27 8 'labelNombreMateria' 590342 ##(Smalltalk.Rectangle) 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 1 850 559 213 2512 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 0 0 0 0 23 1 0 0 106 0 0 0] 98 2 410 2656 98 16 0 2512 98 2 8 1140850944 65 3312 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3312 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 133 3312 786 2144 98 1 8 'Nombre de la materia:' 3312 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 86 0 0 0] 98 0 1440 0 27 2640 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 3680 0 0 0 7 0 0 0 3680 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 3680 98 2 8 1140850945 65 3808 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 3808 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 173 3808 786 2144 98 1 8 'dificultad' 3808 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 106 0 0 0] 98 0 1440 0 27 8 'labelDificultad' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 213 850 559 213 3680 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 106 0 0 0 23 1 0 0 212 0 0 0] 98 2 410 2656 98 16 0 3680 98 2 8 1140850944 65 4400 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 4400 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 173 4400 786 2144 98 1 8 'Dificultad:' 4400 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 106 0 0 0] 98 0 1440 0 27 3808 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 4768 0 0 0 7 0 0 0 4768 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 4768 98 2 8 1140850945 65 4896 0 0 0 7 0 0 0 4896 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 133 4896 786 2144 98 1 8 'SioNo' 4896 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 86 0 0 0] 98 0 1440 0 27 8 'labelTieneFinal' 3090 850 21 41 850 1 41 722 202 208 98 1 786 816 98 2 850 1 425 850 559 213 4768 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 212 0 0 0 23 1 0 0 62 1 0 0] 98 2 410 2656 98 16 0 4768 98 2 8 1140850944 65 5424 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 5424 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 133 5424 786 2144 98 1 8 'Tiene Final?' 5424 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 86 0 0 0] 98 0 1440 0 27 4896 1440 0 27 410 576 98 15 0 2240 98 2 8 1140850688 131073 5792 0 0 0 7 0 0 0 5792 642 234 240 688 32 234 256 98 2 410 2656 98 16 0 5792 98 2 8 1140850945 65 5920 0 0 0 7 0 0 0 5920 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 289 41 850 271 177 5920 786 2144 98 1 8 'unDia' 5920 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 144 0 0 0 20 0 0 0 23 1 0 0 108 0 0 0] 98 0 1440 0 27 8 'labelDiaSemana' 3090 850 21 41 850 1 1 722 202 208 98 1 786 816 98 2 850 1 637 850 559 217 5792 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 0 0 0 0 62 1 0 0 23 1 0 0 170 1 0 0] 98 2 410 2656 98 16 0 5792 98 2 8 1140850944 65 6448 0 0 0 7 0 2722 0 16 2754 8 #[240 255 255 255 0 0 0 0 0 0 0 0 0 0 0 0 188 2 0 0 0 0 0 0 1 2 1 34 83 121 115 116 101 109 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0] 850 193 193 0 6448 0 8 4294903063 2834 0 0 0 722 202 208 98 2 786 816 98 2 850 21 41 850 269 177 6448 786 2144 98 1 8 'Día de la semana:' 6448 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 10 0 0 0 20 0 0 0 144 0 0 0 108 0 0 0] 98 0 1440 0 27 5920 1440 0 27 1440 0 27 234 256 688 0 722 202 208 98 1 786 816 98 2 850 321 1 850 559 943 1456 898 8 #[44 0 0 0 0 0 0 0 1 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 160 0 0 0 0 0 0 0 183 1 0 0 215 1 0 0] 98 2 2240 1536 1440 0 27 234 256 688 0 0 0 0 0 18139 0 0 0 0 1 0 0 722 202 208 98 3 786 816 98 2 850 2719 21 850 911 1021 416 786 2144 98 1 8 'Algoritmo Genético - Genes De La Poblacion Actual ' 416 786 8 #updateMenuBar 688 416 898 8 #[44 0 0 0 0 0 0 0 0 0 0 0 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 79 5 0 0 10 0 0 0 22 7 0 0 8 2 0 0] 98 2 560 1456 1440 0 27 )! !
!ShellViewPoblacionActual class categoriesFor: #resource_Default_view!public!resources-views! !

"Binary Globals"!

