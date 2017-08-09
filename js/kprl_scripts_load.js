function Autoload() {

if (kprltab_lib[0]=="" && kprltab_cod[0]=="" && kprltab_act[0]==""){
	kprltab_lib.splice(0, 1);
	kprltab_cod.splice(0, 1);
	kprltab_act.splice(0, 1);
}
for (cnt=kprltab_lib.length; 0 < cnt; cnt--){
if (kprltab_lib[cnt]=="" && kprltab_cod[cnt]=="" && kprltab_act[cnt]==""){
	kprltab_lib.splice(cnt, 1);
	kprltab_cod.splice(cnt, 1);
	kprltab_act.splice(cnt, 1);
}
}
for (cnt=kprltab_lib_arch.length; 0 < cnt; cnt--){
if (kprltab_lib_arch[cnt]=="" && kprltab_cod_arch[cnt]=="" && kprltab_act_arch[cnt]==""){
	kprltab_lib_arch.splice(cnt, 1);
	kprltab_cod_arch.splice(cnt, 1);
	kprltab_act_arch.splice(cnt, 1);
}
}
		
if (kprltab_lib_arch[0]=="" && kprltab_cod_arch[0]=="" && kprltab_act_arch[0]==""){
	kprltab_lib_arch.splice(0, 1);
	kprltab_cod_arch.splice(0, 1);
	kprltab_act_arch.splice(0, 1);
}

	var tablkprl = document.getElementById('tableau'), 
    rowskprl = tablkprl.getElementsByTagName('tr'),
    tablkprm = document.getElementById('tableau2'), 
    rowskprm = tablkprm.getElementsByTagName('tr');
    
	for (var k = rowskprl.length-2; -1 < k; k--){ 				//vide le tableau
			var tablkprl_l = document.getElementById('kprllist'); 
			tablkprl_l.deleteRow(k);
	}
	for (var m = rowskprm.length-2; -1 < m; m--){ 				//vide le tableau
			var tablkprm_l = document.getElementById('kprllist_arch'); 
			tablkprm_l.deleteRow(m);
	}

	for (i=0; i < kprltab_lib.length; i++){
		var tablkprl = document.getElementById('kprllist'), 
			rowskprl = tablkprl.getElementsByTagName('tr'),
			newRow = tablkprl.insertRow(-1),
			y = rowskprl.length,
			newCell = newRow.insertCell(0);
		newCell.innerHTML = '<input class="tprl_eleme" id="tag_kprl' + y + '" type="checkbox">';
		newCell = newRow.insertCell(1);
		newCell.innerHTML = kprltab_lib[i];
		newCell = newRow.insertCell(2);
		newCell.innerHTML = kprltab_cod[i];
		newCell = newRow.insertCell(3);
		newCell.innerHTML = kprltab_act[i];   
		newCell = newRow.insertCell(4);
		newCell.innerHTML = '<input style="display: none;" class="tprl_eleme" id="mod_kprl' + y + '" type="checkbox">';
		
		for (var l = 0; l < rowskprl.length; l++) {
			rowskprl[l].onclick = (function() {
				var cnt = l; 
					return function() {
						cnt_t = cnt + 1;
						for (var cnt_n = 0; cnt_n < kprltab_lib.length + 1; cnt_n++) {
							jQuery('#mod_kprl'+ cnt_n).attr( 'checked', false );
						}
						jQuery('#mod_kprl'+ cnt_t).attr( 'checked', true );
						jQuery('.highlited_rows').removeClass( "highlited_rows");
						jQuery(this).addClass( "highlited_rows");
						document.getElementById("modif_btn").style.display = "inline-block";
						document.getElementById('kprl_libelle').value = kprltab_lib[cnt];
						document.getElementById('kprl_code').value = kprltab_cod[cnt];
						document.getElementById('kprl_action').value = kprltab_act[cnt];

					}   			
			})(l);
		}
	}

	for (i=0; i < kprltab_lib_arch.length; i++){
		var tablkprl = document.getElementById('kprllist_arch'), 
			rowskprl = tablkprl.getElementsByTagName('tr'),
			newRow = tablkprl.insertRow(-1),
			y = rowskprl.length,
			newCell = newRow.insertCell(0);
		newCell.innerHTML = '<input class="tprl_eleme_arch" id="tag_kprl_arch' + y + '" type="checkbox">';
		newCell = newRow.insertCell(1);
		newCell.innerHTML = kprltab_lib_arch[i];
		newCell = newRow.insertCell(2);
		newCell.innerHTML = kprltab_cod_arch[i];
		newCell = newRow.insertCell(3);
		newCell.innerHTML = kprltab_act_arch[i];   
		newCell = newRow.insertCell(4);
		newCell.innerHTML = '<input style="display: none;" class="tprl_eleme_arch" id="mod_kprl_arch' + y + '" type="checkbox">';
		
		for (var l = 0; l < rowskprl.length; l++) {
			rowskprl[l].onclick = (function() {
				var cnt = l; 
					return function() {
						cnt_t = cnt + 1;
						for (var cnt_n = 0; cnt_n < kprltab_lib_arch.length + 1; cnt_n++) {
							jQuery('#mod_kprl_arch'+ cnt_n).attr( 'checked', false );
						}
						jQuery('#mod_kprl_arch'+ cnt_t).attr( 'checked', true );
						jQuery('.highlited_rows').removeClass( "highlited_rows");
						jQuery(this).addClass( "highlited_rows");
						document.getElementById("modif_btn").style.display = "inline-block";
						document.getElementById('kprl_libelle').value = kprltab_lib_arch[cnt];
						document.getElementById('kprl_code').value = kprltab_cod_arch[cnt];
						document.getElementById('kprl_action').value = kprltab_act_arch[cnt];

					}   			
			})(l);
		}
	}
}

function Autofill() {
var kprltab_lib_pass = kprltab_lib.join(":#:"); 
var kprltab_cod_pass = kprltab_cod.join(":#:"); 
var kprltab_act_pass = kprltab_act.join(":#:"); 
		document.getElementById('kprltab_lib').value = kprltab_lib_pass;
		document.getElementById('kprltab_cod').value = kprltab_cod_pass;
		document.getElementById('kprltab_act').value = kprltab_act_pass;
var kprltab_lib_pass_arch = kprltab_lib_arch.join(":#:"); 
var kprltab_cod_pass_arch = kprltab_cod_arch.join(":#:"); 
var kprltab_act_pass_arch = kprltab_act_arch.join(":#:"); 
		document.getElementById('kprltab_lib_arch').value = kprltab_lib_pass_arch;
		document.getElementById('kprltab_cod_arch').value = kprltab_cod_pass_arch;
		document.getElementById('kprltab_act_arch').value = kprltab_act_pass_arch;
		return true;
}

function Ajouter(form) {
kprltab_lib.push(form.kprl_libelle.value);
kprltab_cod.push(form.kprl_code.value);
kprltab_act.push(form.kprl_action.value);
for (k=kprltab_lib.length-2; -1 < k; k--){
		var tablkprl = document.getElementById('kprllist'); 
		tablkprl.deleteRow(k);
			}
Autoload();
document.getElementById('kprl_libelle').value = '';
document.getElementById('kprl_code').value = '';
document.getElementById('kprl_action').value = '';
	}
	
function SelecAll() {
	var tablkprl = document.getElementById('tableau'), 
		rowskprl = tablkprl.getElementsByTagName('tr');
	for(j=1; j < rowskprl.length; j++){
		jQuery('#tag_kprl'+ j).attr("checked", !jQuery('#tag_kprl'+ j).attr("checked"));
		}
		}

function SelecAll_Arch() {
	var tablkprl = document.getElementById('tableau2'), 
		rowskprl = tablkprl.getElementsByTagName('tr');
	for(j=1; j < rowskprl.length; j++){
		jQuery('#tag_kprl_arch'+ j).attr("checked", !jQuery('#tag_kprl_arch'+ j).attr("checked"));
		}
		}
	
function Archiver() {
	var tablkprl = document.getElementById('tableau'), 
    rowskprl = tablkprl.getElementsByTagName('tr');

	for (i=rowskprl.length; i > 0; i--){
		if (jQuery('#tag_kprl'+ i).prop('checked')) {
			kprltab_lib_arch.push(kprltab_lib.splice(i-1, 1));
			kprltab_cod_arch.push(kprltab_cod.splice(i-1, 1));
			kprltab_act_arch.push(kprltab_act.splice(i-1, 1));
		}
	}
	Autoload();
	}	

function Activer() {
	var tablkprl = document.getElementById('tableau2'), 
    rowskprl = tablkprl.getElementsByTagName('tr');

	for (i=rowskprl.length; i > 0; i--){
		if (jQuery('#tag_kprl_arch'+ i).prop('checked')) {
			kprltab_lib.push(kprltab_lib_arch.splice(i-1, 1));
			kprltab_cod.push(kprltab_cod_arch.splice(i-1, 1));
			kprltab_act.push(kprltab_act_arch.splice(i-1, 1));
		}
	}
	Autoload();
	}	
	
function Supprimer() {
	var tablkprm = document.getElementById('tableau2'), 
    rowskprm = tablkprm.getElementsByTagName('tr'),
	tablkprl = document.getElementById('tableau'), 
    rowskprl = tablkprl.getElementsByTagName('tr');

	for (i=rowskprm.length; i > 0; i--){
		if (jQuery('#tag_kprl_arch'+ i).prop('checked')) {
			kprltab_lib_arch.splice(i-1, 1);
			kprltab_cod_arch.splice(i-1, 1);
			kprltab_act_arch.splice(i-1, 1);
		}
	}
	for (i=rowskprl.length; i > 0; i--){
		if (jQuery('#tag_kprl'+ i).prop('checked')) {
			kprltab_lib.splice(i-1, 1);
			kprltab_cod.splice(i-1, 1);
			kprltab_act.splice(i-1, 1);
		}
	}
	Autoload();
	}		
	
	
function Modifie(form) {	
	var tablkprl = document.getElementById('tableau'), 
    rowskprl = tablkprl.getElementsByTagName('tr'),
    tablkprm = document.getElementById('tableau2'), 
    rowskprm = tablkprm.getElementsByTagName('tr');

	for (i=rowskprl.length; i > 0; i--){
		if (jQuery('#mod_kprl'+ i).prop('checked')) {
			kprltab_lib[i-1] = form.kprl_libelle.value;
			kprltab_cod[i-1] = form.kprl_code.value;
			kprltab_act[i-1] = form.kprl_action.value;
		}
	}
		for (i=rowskprm.length; i > 0; i--){
		if (jQuery('#mod_kprl_arch'+ i).prop('checked')) {
			kprltab_lib_arch[i-1] = form.kprl_libelle.value;
			kprltab_cod_arch[i-1] = form.kprl_code.value;
			kprltab_act_arch[i-1] = form.kprl_action.value;
		}
	}
	document.getElementById('kprl_libelle').value = '';
	document.getElementById('kprl_code').value = '';
	document.getElementById('kprl_action').value = '';
	Autoload();
	}	
function EraseValue(){
      if( jQuery( event.target).is('th') || jQuery( event.target).is('input') || jQuery( event.target).is('textarea') || jQuery( event.target).is('td')) {
		}
		else{
		document.getElementById('kprl_libelle').value = '';
		document.getElementById('kprl_code').value = '';
		document.getElementById('kprl_action').value = '';
		document.getElementById("modif_btn").style.display = "none";
		jQuery('.highlited_rows').removeClass( "highlited_rows");
		}
}