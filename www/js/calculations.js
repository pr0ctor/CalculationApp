//calc sizing
var cansizing = [];
cansizing["TC14"] = .46;
cansizing["M2001"] = .4;
cansizing["TC18"] = 1;
cansizing["TC30"] = 1;
cansizing["T1800"] = 1;


function calcSizing()
{
	var valid = true;
	
	var batchsize = $('#batchsize').val();
	var heel = $('#heel').val();
	var targconc = $('#targconc').val();
	var ot = $('#otamt').val();
	var sizingval = $('#cansizing').val();
	var sizing = cansizing[sizingval];
	
	if(!isNaN(batchsize) || !(batchsize.length>0))
	{
		valid = false;
	}
	
	if(!isNaN(heel))
	{
		valid = false;
	}
	
	if(!isNaN(targconc))
	{
		valid = false;
	}
	
	if(!isNaN(ot))
	{
		valid = false;
	}
	
	if(!isNaN(sizing))
	{
		valid = false;
	}
	
	if(valid)
	{
		
		var sizingToAdd = ((batchsize-heel)*targconc) / ((ot/sizing));
		
		
		
		
	}
}