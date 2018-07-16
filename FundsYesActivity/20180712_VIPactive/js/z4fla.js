(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"z4fla_atlas_", frames: [[0,640,1200,10],[1258,536,227,84],[1029,536,227,84],[1726,501,281,172],[802,536,225,85],[569,536,231,102],[0,0,567,551],[1519,501,205,322],[569,0,473,534],[1044,0,473,534],[1519,0,397,499],[1918,0,28,24]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btn11 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn2 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cloud2 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cloud3 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.infobg = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.light = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.manarm = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.manbody = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wavelighttp40 = function() {
	this.spriteSheet = ss["z4fla_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.title2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// font
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D1719").s().p("AwFCcQgBgJgJgNIAAgDQATAHAPAAQAVAAAGgSIACgFIisAAIgGARQgBAFgFAAIgUgCQgBAAgBgBQgBAAgBAAQAAAAAAgBQgBAAAAAAIAQgoQAKgdAGgfIgvAAQgEAAAAgFIAAgLQAAgGAEAAIAzAAIABgDQAFgkgCgqQAAgFAHAAIDDAAQAEAAAAAFIgCBRIArAAQAEAAAAAGIAAALQAAAFgEAAIgsAAIgGA8IAlAAQAEAAAAAGIAAAKQAAAGgEAAIgpAAIgGAXQgJAagmAAQgXAAgBgIgAx1BdICqAAIAGg8IihAAgAxjALICgAAIAChBIidAAQAAAlgFAcgAqVCfQAAgIgJgPQAAgBABAAQAAgBAAAAQABAAABAAQABAAABAAQAiAAAGgEQAIgFAAgJIAAhBIimAAIgEAQQgHAegSAeQgKASgSARIgEgBIgOgKQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQASgQANgaQAOgcAGgeQAFgfAAgtIAAhwQAAgFAGAAIDIAAQAHAAAAAFIAAEMQAAARgTAJQgSAIgcACQgEAAgBgEgAsKgdQAAAfgCAaICjAAIAAhEIihAAgAsKg/IChAAIAAg+IihAAgALtCfQgBgIgIgOQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQAgAAAGgCQAGgDAAgGIAAgYIiTAAIAAA5QAAAFgGAAIgOAAQgFAAAAgFIAAirIgHAIQgTAVgXARIgIgCIgPgGQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgDADgBQAjgYAcgkQAQgVAMgYIADgDIhgAAQgEAAAAgGIAAgLQAAgGAEAAIBqAAIANgmQADgEADAAIAbAKQAEADAAACQAAAEgEACQgJAAgCAGIgHAPICoAAQAFAAAAAGIAAALQAAAGgFAAIiyAAIgTAiIgEAFICjAAQAHAAAAAGIAAC3QAAAMgRAGQgRAFgaACQgEAAAAgEgAKBBOICTAAIAAgsIiTAAgAKBANICTAAIAAgpIiTAAgACBCbQgcgTgQgWQgNgSgKgYQgIgWgHgeIgeAAIAABkQAagGAWgHIACAAQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAASgBACQgrAMgsAJQgFAKgDAAQgDAAgKgdIAigGIAAhpIgTAAQgFAAAAgFIAAgLQAAgEAFAAIAVAAIAAiMQAAgFAFAAICJAAQAEAAAAAFIAAALQAAAFgEAAIh2AAIAAAcIBtAAQAFAAAAAGIAAAKQAAAGgFAAIhtAAIAAAbIBtAAQAFAAAAAGIAAALQAAAFgFAAIhtAAIAAAZICDAAQAEAAAAAEIAAALQAAAFgEAAIhRAAQAGAWAGAQIAGAPIAQgIQANgIANgNIAEgBQAVARAAADQAAAAAAABQAAAAgBABQAAAAgBAAQgBAAgBAAQgHAAgBACQgUAQgWALIADADQAPAVATALQAJAHAIACIADADQAAADgCACIgKAMQgCAEgCAAgAhpCiQgFAAAAgFIAAjqIgaAAIAAChQAAAEgFAAIgOAAQgGAAAAgEIAAixQAAgGAGAAIAtAAIAAg0QAAgEAFAAQAaAAAAAEQAAAFgDABQgEAAAAAGIAAAoIAuAAQAGAAAAAGIAACfQAAAKgJAGQgIAEgOACQgEAAAAgEQgBgIgIgPIACgBQANAAACgCQADgCAAgFIAAiAIgcAAIAADqQAAAFgFAAgAC1CaQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBQAKgXAIgcQAIgbAEg2QAAgFAGAAQAaAFAAACQAAAEgEACQgGAEgBAGIgEAjQAHAUAKAJQAGAIAKAEIAAh5IhCAAQgEAAAAgFIAAgLQAAgFAEAAIBCAAIAAg3Ig3AAQgEAAAAgFIAAgLQAAgGAEAAIA3AAIAAgvQAAgDAFAAQAaAAAAADQAAAFgDABQgEAAAAAHIAAAiIAsAAQAEAAAAAGIAAALQAAAFgEAAIgsAAIAAA3IA1AAQAFAAAAAFIAAALQAAAFgFAAIg1AAIAAA0IAwAAQAEAAAAAFIAAALQAAAFgEAAIgwAAIAAA4QAYAEAoAAQBTAABRgGQADAAAAAEIgHAXQgBAEgEAAIibAAQghAAgXgDQgbgFgOgHQgRgJgKgNIgDgEIgCAKIgMAkQgCAFgCAAgAn2CaIgMgOIgCgEIACgDQAVgHARgKQAQgMAOgNQATgTAQgaQAOgVALgdQAKgVAGgZIAKgyIABgOIhKAAQgEAAAAgFIAAgOQAAgEAEAAIBeAAQAGAAAAAHIgDAwQAAAfAGAcQAFAXAQAaQATAhAYAYQAhAgArASIgBAFIgOAPQgCACgEAAQgmgUgighQgcgcgUgkQgQghgHgaQgFAUgHAPQgKAYgQAZQgOAagUATQgSATgSALQgQALgTAIQgDAAgCgDgASHCYQgJgFgJgMQgMgOgMgYQgIgVgHgXIgGAFIgEABQgEAAgCgEIgJgJQgDgCAAgDIACgCQAIgDAHgGIAFgEQgGgegDghIgEg/IiNAAIAABkQAAAugFAbQgEAWgKAXQgFANgJANIgEgBQgGgGgHgDIgBgFQAIgMAGgTQAGgUADgWQADgXAAghIAAh0QAAgGAGAAICfAAIgBgeQAAgBAAgBQABgBAAAAQAAgBABAAQAAAAABAAIAXACQAHAAAAADQAAAFgDABQgDABAAAIIAAAOIA/AAQAFAAAAAGIAAAKQAAAGgFAAIg+AAQAAAhACAXQACAaAEAWQALgOAIgWQAHgQADgSQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAcAKAAADQAAADgEACQgEAAgCADQgHAYgJATQgJARgLAOIgIAIQAGAZAHAQQAIAWALAQQAIAGAEAAQAEAAAFgJQAGgJAHgTQACAAACAEIALALQAEADAAAFQgJAVgIAMQgMAQgKAAQgFAAgFgCgAP6CaQgmAAAAgXIAAhMQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAWACQABAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAABQAAAAgBABQAAABAAAAQAAAAgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAA2QAAAPASAAIAQAAQATAAADgEQAEgCAHgSQAEAHAKAFQAEACAAADQgJAWgFACQgFAEgPAAgAOmCNIgCgCIAAgCIAKgcIAGggIACgEIARAGQAEACAAADQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQgDAAAAAEQgHAhgGATIgDAEgAFrBtQgEAAAAgEIAAhnQAAgFAEAAIB9AAQAFAAAAADIAABoQAAAEgFAAIgOAAQgEAAAAgEIAAgMIhXAAIAAANQAAAEgGAAgAF/BGIBXAAIAAg0IhXAAgAQvBWIgNgKIAJgOIADgCIAgAaIgCADIgLAOQgJgKgJgHgAQBBTIgMgJQAAgCAJgMIADgCIARAMIANAOIgCACIgKAOgAwjBIQgPgHgKgEIALgPIADgCQAUAIANAHIAaAPIgCADIgLAPQgQgLgTgJgAPGAwQgFAAAAgEIAAhNQAAgEAFAAIBZAAQAFAAAAAEIAABMQAAAEgFAAIgLAAQgFAAAAgEIAAgJIg4AAIAAAKQAAAEgGAAgAPXAPIA4AAIAAghIg4AAgAwjgOQgPgIgKgDIALgPIADgDQAUAIANAIIAaAQIgCADIgLANQgQgKgTgJgAFggjQAGgCAHgGQAJgIAFgIQAHgNACgPQADgMAAgWIggAAQgEAAAAgFIAAgLQAAgFAEAAICDAAQAEAAAAAFQAAAvgDAVQgEAZgHAMQgGAMgcAAQgSAAgBgGQgBgIgHgKIAAgDQAPADAMAAQANAAAEgJQAEgGADgUQACgOABgcIg5AAQgBAcgCANQgEATgHANQgFAKgJAIQgIAHgLAGgAyqgyIgKgIQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBIAagYQARgRALgVQALgTAGgRQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAbAOAAADQAAAAAAABQgBABAAAAQAAAAAAABQgBAAAAAAQgGAAgBADIgGALIDTAAQAEAAAAAFIAAALQAAAGgEAAIjfAAQgKAPgJALQgKAMgYAWQgEAAgDgDgAPBg6QgDAAAAgFIAAgLQAAgEADAAIBmAAQADAAAAAEIAAALQAAAFgDAAgARxiLIgPgHQAAgCAKgNIACgCIAUALIAQAMIgCADIgKANg");
	this.shape.setTransform(125.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.title2, rect = new cjs.Rectangle(4.3,2.9,241.6,32.8), [rect]);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, rect = new cjs.Rectangle(0,0,231,102), [rect]);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, rect = new cjs.Rectangle(0,0,225,85), [rect]);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B57C00","#F0D473","#FFF9EF","#F0D473","#B57C00"],[0,0.247,0.518,0.784,1],-91.5,0,91.5,0).s().p("AuSfkMAAAg/HIclAAMAAAA/Hg");
	this.shape.setTransform(91.5,202);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, rect = new cjs.Rectangle(0,0,183,404), [rect]);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, rect = new cjs.Rectangle(0,0,281,172), [rect]);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, rect = new cjs.Rectangle(0,0,281,172), [rect]);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cloud();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, rect = new cjs.Rectangle(0,0,281,172), [rect]);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.manarm();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, rect = new cjs.Rectangle(0,0,473,534), [rect]);


(lib.mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// font
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAAAmQgdA3gWAdIgugiQAtg3ATgSIhfgVIASg3QA+AVAcARIgHhiIA3AAQgBAngIA6QAogUA0gRIASA3QgyAQgvAFQAYAVArA0IguAiQgYgfgdg1g");
	this.shape.setTransform(21.4,20.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mark, rect = new cjs.Rectangle(8.5,8.2,25.8,24.4), [rect]);


(lib.bgwave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wavelighttp40();
	this.instance.parent = this;
	this.instance.setTransform(1176,624);

	this.instance_1 = new lib.wavelighttp40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1148,624);

	this.instance_2 = new lib.wavelighttp40();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1120,624);

	this.instance_3 = new lib.wavelighttp40();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1092,624);

	this.instance_4 = new lib.wavelighttp40();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1064,624);

	this.instance_5 = new lib.wavelighttp40();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1036,624);

	this.instance_6 = new lib.wavelighttp40();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1008,624);

	this.instance_7 = new lib.wavelighttp40();
	this.instance_7.parent = this;
	this.instance_7.setTransform(980,624);

	this.instance_8 = new lib.wavelighttp40();
	this.instance_8.parent = this;
	this.instance_8.setTransform(952,624);

	this.instance_9 = new lib.wavelighttp40();
	this.instance_9.parent = this;
	this.instance_9.setTransform(924,624);

	this.instance_10 = new lib.wavelighttp40();
	this.instance_10.parent = this;
	this.instance_10.setTransform(896,624);

	this.instance_11 = new lib.wavelighttp40();
	this.instance_11.parent = this;
	this.instance_11.setTransform(868,624);

	this.instance_12 = new lib.wavelighttp40();
	this.instance_12.parent = this;
	this.instance_12.setTransform(840,624);

	this.instance_13 = new lib.wavelighttp40();
	this.instance_13.parent = this;
	this.instance_13.setTransform(812,624);

	this.instance_14 = new lib.wavelighttp40();
	this.instance_14.parent = this;
	this.instance_14.setTransform(784,624);

	this.instance_15 = new lib.wavelighttp40();
	this.instance_15.parent = this;
	this.instance_15.setTransform(756,624);

	this.instance_16 = new lib.wavelighttp40();
	this.instance_16.parent = this;
	this.instance_16.setTransform(728,624);

	this.instance_17 = new lib.wavelighttp40();
	this.instance_17.parent = this;
	this.instance_17.setTransform(700,624);

	this.instance_18 = new lib.wavelighttp40();
	this.instance_18.parent = this;
	this.instance_18.setTransform(672,624);

	this.instance_19 = new lib.wavelighttp40();
	this.instance_19.parent = this;
	this.instance_19.setTransform(644,624);

	this.instance_20 = new lib.wavelighttp40();
	this.instance_20.parent = this;
	this.instance_20.setTransform(616,624);

	this.instance_21 = new lib.wavelighttp40();
	this.instance_21.parent = this;
	this.instance_21.setTransform(588,624);

	this.instance_22 = new lib.wavelighttp40();
	this.instance_22.parent = this;
	this.instance_22.setTransform(560,624);

	this.instance_23 = new lib.wavelighttp40();
	this.instance_23.parent = this;
	this.instance_23.setTransform(532,624);

	this.instance_24 = new lib.wavelighttp40();
	this.instance_24.parent = this;
	this.instance_24.setTransform(504,624);

	this.instance_25 = new lib.wavelighttp40();
	this.instance_25.parent = this;
	this.instance_25.setTransform(476,624);

	this.instance_26 = new lib.wavelighttp40();
	this.instance_26.parent = this;
	this.instance_26.setTransform(448,624);

	this.instance_27 = new lib.wavelighttp40();
	this.instance_27.parent = this;
	this.instance_27.setTransform(420,624);

	this.instance_28 = new lib.wavelighttp40();
	this.instance_28.parent = this;
	this.instance_28.setTransform(392,624);

	this.instance_29 = new lib.wavelighttp40();
	this.instance_29.parent = this;
	this.instance_29.setTransform(364,624);

	this.instance_30 = new lib.wavelighttp40();
	this.instance_30.parent = this;
	this.instance_30.setTransform(336,624);

	this.instance_31 = new lib.wavelighttp40();
	this.instance_31.parent = this;
	this.instance_31.setTransform(308,624);

	this.instance_32 = new lib.wavelighttp40();
	this.instance_32.parent = this;
	this.instance_32.setTransform(280,624);

	this.instance_33 = new lib.wavelighttp40();
	this.instance_33.parent = this;
	this.instance_33.setTransform(252,624);

	this.instance_34 = new lib.wavelighttp40();
	this.instance_34.parent = this;
	this.instance_34.setTransform(224,624);

	this.instance_35 = new lib.wavelighttp40();
	this.instance_35.parent = this;
	this.instance_35.setTransform(196,624);

	this.instance_36 = new lib.wavelighttp40();
	this.instance_36.parent = this;
	this.instance_36.setTransform(168,624);

	this.instance_37 = new lib.wavelighttp40();
	this.instance_37.parent = this;
	this.instance_37.setTransform(140,624);

	this.instance_38 = new lib.wavelighttp40();
	this.instance_38.parent = this;
	this.instance_38.setTransform(112,624);

	this.instance_39 = new lib.wavelighttp40();
	this.instance_39.parent = this;
	this.instance_39.setTransform(84,624);

	this.instance_40 = new lib.wavelighttp40();
	this.instance_40.parent = this;
	this.instance_40.setTransform(56,624);

	this.instance_41 = new lib.wavelighttp40();
	this.instance_41.parent = this;
	this.instance_41.setTransform(28,624);

	this.instance_42 = new lib.wavelighttp40();
	this.instance_42.parent = this;
	this.instance_42.setTransform(0,624);

	this.instance_43 = new lib.wavelighttp40();
	this.instance_43.parent = this;
	this.instance_43.setTransform(1176,600);

	this.instance_44 = new lib.wavelighttp40();
	this.instance_44.parent = this;
	this.instance_44.setTransform(1148,600);

	this.instance_45 = new lib.wavelighttp40();
	this.instance_45.parent = this;
	this.instance_45.setTransform(1120,600);

	this.instance_46 = new lib.wavelighttp40();
	this.instance_46.parent = this;
	this.instance_46.setTransform(1092,600);

	this.instance_47 = new lib.wavelighttp40();
	this.instance_47.parent = this;
	this.instance_47.setTransform(1064,600);

	this.instance_48 = new lib.wavelighttp40();
	this.instance_48.parent = this;
	this.instance_48.setTransform(1036,600);

	this.instance_49 = new lib.wavelighttp40();
	this.instance_49.parent = this;
	this.instance_49.setTransform(1008,600);

	this.instance_50 = new lib.wavelighttp40();
	this.instance_50.parent = this;
	this.instance_50.setTransform(980,600);

	this.instance_51 = new lib.wavelighttp40();
	this.instance_51.parent = this;
	this.instance_51.setTransform(952,600);

	this.instance_52 = new lib.wavelighttp40();
	this.instance_52.parent = this;
	this.instance_52.setTransform(924,600);

	this.instance_53 = new lib.wavelighttp40();
	this.instance_53.parent = this;
	this.instance_53.setTransform(896,600);

	this.instance_54 = new lib.wavelighttp40();
	this.instance_54.parent = this;
	this.instance_54.setTransform(868,600);

	this.instance_55 = new lib.wavelighttp40();
	this.instance_55.parent = this;
	this.instance_55.setTransform(840,600);

	this.instance_56 = new lib.wavelighttp40();
	this.instance_56.parent = this;
	this.instance_56.setTransform(812,600);

	this.instance_57 = new lib.wavelighttp40();
	this.instance_57.parent = this;
	this.instance_57.setTransform(784,600);

	this.instance_58 = new lib.wavelighttp40();
	this.instance_58.parent = this;
	this.instance_58.setTransform(756,600);

	this.instance_59 = new lib.wavelighttp40();
	this.instance_59.parent = this;
	this.instance_59.setTransform(728,600);

	this.instance_60 = new lib.wavelighttp40();
	this.instance_60.parent = this;
	this.instance_60.setTransform(700,600);

	this.instance_61 = new lib.wavelighttp40();
	this.instance_61.parent = this;
	this.instance_61.setTransform(672,600);

	this.instance_62 = new lib.wavelighttp40();
	this.instance_62.parent = this;
	this.instance_62.setTransform(644,600);

	this.instance_63 = new lib.wavelighttp40();
	this.instance_63.parent = this;
	this.instance_63.setTransform(616,600);

	this.instance_64 = new lib.wavelighttp40();
	this.instance_64.parent = this;
	this.instance_64.setTransform(588,600);

	this.instance_65 = new lib.wavelighttp40();
	this.instance_65.parent = this;
	this.instance_65.setTransform(560,600);

	this.instance_66 = new lib.wavelighttp40();
	this.instance_66.parent = this;
	this.instance_66.setTransform(532,600);

	this.instance_67 = new lib.wavelighttp40();
	this.instance_67.parent = this;
	this.instance_67.setTransform(504,600);

	this.instance_68 = new lib.wavelighttp40();
	this.instance_68.parent = this;
	this.instance_68.setTransform(476,600);

	this.instance_69 = new lib.wavelighttp40();
	this.instance_69.parent = this;
	this.instance_69.setTransform(448,600);

	this.instance_70 = new lib.wavelighttp40();
	this.instance_70.parent = this;
	this.instance_70.setTransform(420,600);

	this.instance_71 = new lib.wavelighttp40();
	this.instance_71.parent = this;
	this.instance_71.setTransform(392,600);

	this.instance_72 = new lib.wavelighttp40();
	this.instance_72.parent = this;
	this.instance_72.setTransform(364,600);

	this.instance_73 = new lib.wavelighttp40();
	this.instance_73.parent = this;
	this.instance_73.setTransform(336,600);

	this.instance_74 = new lib.wavelighttp40();
	this.instance_74.parent = this;
	this.instance_74.setTransform(308,600);

	this.instance_75 = new lib.wavelighttp40();
	this.instance_75.parent = this;
	this.instance_75.setTransform(280,600);

	this.instance_76 = new lib.wavelighttp40();
	this.instance_76.parent = this;
	this.instance_76.setTransform(252,600);

	this.instance_77 = new lib.wavelighttp40();
	this.instance_77.parent = this;
	this.instance_77.setTransform(224,600);

	this.instance_78 = new lib.wavelighttp40();
	this.instance_78.parent = this;
	this.instance_78.setTransform(196,600);

	this.instance_79 = new lib.wavelighttp40();
	this.instance_79.parent = this;
	this.instance_79.setTransform(168,600);

	this.instance_80 = new lib.wavelighttp40();
	this.instance_80.parent = this;
	this.instance_80.setTransform(140,600);

	this.instance_81 = new lib.wavelighttp40();
	this.instance_81.parent = this;
	this.instance_81.setTransform(112,600);

	this.instance_82 = new lib.wavelighttp40();
	this.instance_82.parent = this;
	this.instance_82.setTransform(84,600);

	this.instance_83 = new lib.wavelighttp40();
	this.instance_83.parent = this;
	this.instance_83.setTransform(56,600);

	this.instance_84 = new lib.wavelighttp40();
	this.instance_84.parent = this;
	this.instance_84.setTransform(28,600);

	this.instance_85 = new lib.wavelighttp40();
	this.instance_85.parent = this;
	this.instance_85.setTransform(0,600);

	this.instance_86 = new lib.wavelighttp40();
	this.instance_86.parent = this;
	this.instance_86.setTransform(1176,576);

	this.instance_87 = new lib.wavelighttp40();
	this.instance_87.parent = this;
	this.instance_87.setTransform(1148,576);

	this.instance_88 = new lib.wavelighttp40();
	this.instance_88.parent = this;
	this.instance_88.setTransform(1120,576);

	this.instance_89 = new lib.wavelighttp40();
	this.instance_89.parent = this;
	this.instance_89.setTransform(1092,576);

	this.instance_90 = new lib.wavelighttp40();
	this.instance_90.parent = this;
	this.instance_90.setTransform(1064,576);

	this.instance_91 = new lib.wavelighttp40();
	this.instance_91.parent = this;
	this.instance_91.setTransform(1036,576);

	this.instance_92 = new lib.wavelighttp40();
	this.instance_92.parent = this;
	this.instance_92.setTransform(1008,576);

	this.instance_93 = new lib.wavelighttp40();
	this.instance_93.parent = this;
	this.instance_93.setTransform(980,576);

	this.instance_94 = new lib.wavelighttp40();
	this.instance_94.parent = this;
	this.instance_94.setTransform(952,576);

	this.instance_95 = new lib.wavelighttp40();
	this.instance_95.parent = this;
	this.instance_95.setTransform(924,576);

	this.instance_96 = new lib.wavelighttp40();
	this.instance_96.parent = this;
	this.instance_96.setTransform(896,576);

	this.instance_97 = new lib.wavelighttp40();
	this.instance_97.parent = this;
	this.instance_97.setTransform(868,576);

	this.instance_98 = new lib.wavelighttp40();
	this.instance_98.parent = this;
	this.instance_98.setTransform(840,576);

	this.instance_99 = new lib.wavelighttp40();
	this.instance_99.parent = this;
	this.instance_99.setTransform(812,576);

	this.instance_100 = new lib.wavelighttp40();
	this.instance_100.parent = this;
	this.instance_100.setTransform(784,576);

	this.instance_101 = new lib.wavelighttp40();
	this.instance_101.parent = this;
	this.instance_101.setTransform(756,576);

	this.instance_102 = new lib.wavelighttp40();
	this.instance_102.parent = this;
	this.instance_102.setTransform(728,576);

	this.instance_103 = new lib.wavelighttp40();
	this.instance_103.parent = this;
	this.instance_103.setTransform(700,576);

	this.instance_104 = new lib.wavelighttp40();
	this.instance_104.parent = this;
	this.instance_104.setTransform(672,576);

	this.instance_105 = new lib.wavelighttp40();
	this.instance_105.parent = this;
	this.instance_105.setTransform(644,576);

	this.instance_106 = new lib.wavelighttp40();
	this.instance_106.parent = this;
	this.instance_106.setTransform(616,576);

	this.instance_107 = new lib.wavelighttp40();
	this.instance_107.parent = this;
	this.instance_107.setTransform(588,576);

	this.instance_108 = new lib.wavelighttp40();
	this.instance_108.parent = this;
	this.instance_108.setTransform(560,576);

	this.instance_109 = new lib.wavelighttp40();
	this.instance_109.parent = this;
	this.instance_109.setTransform(532,576);

	this.instance_110 = new lib.wavelighttp40();
	this.instance_110.parent = this;
	this.instance_110.setTransform(504,576);

	this.instance_111 = new lib.wavelighttp40();
	this.instance_111.parent = this;
	this.instance_111.setTransform(476,576);

	this.instance_112 = new lib.wavelighttp40();
	this.instance_112.parent = this;
	this.instance_112.setTransform(448,576);

	this.instance_113 = new lib.wavelighttp40();
	this.instance_113.parent = this;
	this.instance_113.setTransform(420,576);

	this.instance_114 = new lib.wavelighttp40();
	this.instance_114.parent = this;
	this.instance_114.setTransform(392,576);

	this.instance_115 = new lib.wavelighttp40();
	this.instance_115.parent = this;
	this.instance_115.setTransform(364,576);

	this.instance_116 = new lib.wavelighttp40();
	this.instance_116.parent = this;
	this.instance_116.setTransform(336,576);

	this.instance_117 = new lib.wavelighttp40();
	this.instance_117.parent = this;
	this.instance_117.setTransform(308,576);

	this.instance_118 = new lib.wavelighttp40();
	this.instance_118.parent = this;
	this.instance_118.setTransform(280,576);

	this.instance_119 = new lib.wavelighttp40();
	this.instance_119.parent = this;
	this.instance_119.setTransform(252,576);

	this.instance_120 = new lib.wavelighttp40();
	this.instance_120.parent = this;
	this.instance_120.setTransform(224,576);

	this.instance_121 = new lib.wavelighttp40();
	this.instance_121.parent = this;
	this.instance_121.setTransform(196,576);

	this.instance_122 = new lib.wavelighttp40();
	this.instance_122.parent = this;
	this.instance_122.setTransform(168,576);

	this.instance_123 = new lib.wavelighttp40();
	this.instance_123.parent = this;
	this.instance_123.setTransform(140,576);

	this.instance_124 = new lib.wavelighttp40();
	this.instance_124.parent = this;
	this.instance_124.setTransform(112,576);

	this.instance_125 = new lib.wavelighttp40();
	this.instance_125.parent = this;
	this.instance_125.setTransform(84,576);

	this.instance_126 = new lib.wavelighttp40();
	this.instance_126.parent = this;
	this.instance_126.setTransform(56,576);

	this.instance_127 = new lib.wavelighttp40();
	this.instance_127.parent = this;
	this.instance_127.setTransform(28,576);

	this.instance_128 = new lib.wavelighttp40();
	this.instance_128.parent = this;
	this.instance_128.setTransform(0,576);

	this.instance_129 = new lib.wavelighttp40();
	this.instance_129.parent = this;
	this.instance_129.setTransform(1176,552);

	this.instance_130 = new lib.wavelighttp40();
	this.instance_130.parent = this;
	this.instance_130.setTransform(1148,552);

	this.instance_131 = new lib.wavelighttp40();
	this.instance_131.parent = this;
	this.instance_131.setTransform(1120,552);

	this.instance_132 = new lib.wavelighttp40();
	this.instance_132.parent = this;
	this.instance_132.setTransform(1092,552);

	this.instance_133 = new lib.wavelighttp40();
	this.instance_133.parent = this;
	this.instance_133.setTransform(1064,552);

	this.instance_134 = new lib.wavelighttp40();
	this.instance_134.parent = this;
	this.instance_134.setTransform(1036,552);

	this.instance_135 = new lib.wavelighttp40();
	this.instance_135.parent = this;
	this.instance_135.setTransform(1008,552);

	this.instance_136 = new lib.wavelighttp40();
	this.instance_136.parent = this;
	this.instance_136.setTransform(980,552);

	this.instance_137 = new lib.wavelighttp40();
	this.instance_137.parent = this;
	this.instance_137.setTransform(952,552);

	this.instance_138 = new lib.wavelighttp40();
	this.instance_138.parent = this;
	this.instance_138.setTransform(924,552);

	this.instance_139 = new lib.wavelighttp40();
	this.instance_139.parent = this;
	this.instance_139.setTransform(896,552);

	this.instance_140 = new lib.wavelighttp40();
	this.instance_140.parent = this;
	this.instance_140.setTransform(868,552);

	this.instance_141 = new lib.wavelighttp40();
	this.instance_141.parent = this;
	this.instance_141.setTransform(840,552);

	this.instance_142 = new lib.wavelighttp40();
	this.instance_142.parent = this;
	this.instance_142.setTransform(812,552);

	this.instance_143 = new lib.wavelighttp40();
	this.instance_143.parent = this;
	this.instance_143.setTransform(784,552);

	this.instance_144 = new lib.wavelighttp40();
	this.instance_144.parent = this;
	this.instance_144.setTransform(756,552);

	this.instance_145 = new lib.wavelighttp40();
	this.instance_145.parent = this;
	this.instance_145.setTransform(728,552);

	this.instance_146 = new lib.wavelighttp40();
	this.instance_146.parent = this;
	this.instance_146.setTransform(700,552);

	this.instance_147 = new lib.wavelighttp40();
	this.instance_147.parent = this;
	this.instance_147.setTransform(672,552);

	this.instance_148 = new lib.wavelighttp40();
	this.instance_148.parent = this;
	this.instance_148.setTransform(644,552);

	this.instance_149 = new lib.wavelighttp40();
	this.instance_149.parent = this;
	this.instance_149.setTransform(616,552);

	this.instance_150 = new lib.wavelighttp40();
	this.instance_150.parent = this;
	this.instance_150.setTransform(588,552);

	this.instance_151 = new lib.wavelighttp40();
	this.instance_151.parent = this;
	this.instance_151.setTransform(560,552);

	this.instance_152 = new lib.wavelighttp40();
	this.instance_152.parent = this;
	this.instance_152.setTransform(532,552);

	this.instance_153 = new lib.wavelighttp40();
	this.instance_153.parent = this;
	this.instance_153.setTransform(504,552);

	this.instance_154 = new lib.wavelighttp40();
	this.instance_154.parent = this;
	this.instance_154.setTransform(476,552);

	this.instance_155 = new lib.wavelighttp40();
	this.instance_155.parent = this;
	this.instance_155.setTransform(448,552);

	this.instance_156 = new lib.wavelighttp40();
	this.instance_156.parent = this;
	this.instance_156.setTransform(420,552);

	this.instance_157 = new lib.wavelighttp40();
	this.instance_157.parent = this;
	this.instance_157.setTransform(392,552);

	this.instance_158 = new lib.wavelighttp40();
	this.instance_158.parent = this;
	this.instance_158.setTransform(364,552);

	this.instance_159 = new lib.wavelighttp40();
	this.instance_159.parent = this;
	this.instance_159.setTransform(336,552);

	this.instance_160 = new lib.wavelighttp40();
	this.instance_160.parent = this;
	this.instance_160.setTransform(308,552);

	this.instance_161 = new lib.wavelighttp40();
	this.instance_161.parent = this;
	this.instance_161.setTransform(280,552);

	this.instance_162 = new lib.wavelighttp40();
	this.instance_162.parent = this;
	this.instance_162.setTransform(252,552);

	this.instance_163 = new lib.wavelighttp40();
	this.instance_163.parent = this;
	this.instance_163.setTransform(224,552);

	this.instance_164 = new lib.wavelighttp40();
	this.instance_164.parent = this;
	this.instance_164.setTransform(196,552);

	this.instance_165 = new lib.wavelighttp40();
	this.instance_165.parent = this;
	this.instance_165.setTransform(168,552);

	this.instance_166 = new lib.wavelighttp40();
	this.instance_166.parent = this;
	this.instance_166.setTransform(140,552);

	this.instance_167 = new lib.wavelighttp40();
	this.instance_167.parent = this;
	this.instance_167.setTransform(112,552);

	this.instance_168 = new lib.wavelighttp40();
	this.instance_168.parent = this;
	this.instance_168.setTransform(84,552);

	this.instance_169 = new lib.wavelighttp40();
	this.instance_169.parent = this;
	this.instance_169.setTransform(56,552);

	this.instance_170 = new lib.wavelighttp40();
	this.instance_170.parent = this;
	this.instance_170.setTransform(28,552);

	this.instance_171 = new lib.wavelighttp40();
	this.instance_171.parent = this;
	this.instance_171.setTransform(0,552);

	this.instance_172 = new lib.wavelighttp40();
	this.instance_172.parent = this;
	this.instance_172.setTransform(1176,528);

	this.instance_173 = new lib.wavelighttp40();
	this.instance_173.parent = this;
	this.instance_173.setTransform(1148,528);

	this.instance_174 = new lib.wavelighttp40();
	this.instance_174.parent = this;
	this.instance_174.setTransform(1120,528);

	this.instance_175 = new lib.wavelighttp40();
	this.instance_175.parent = this;
	this.instance_175.setTransform(1092,528);

	this.instance_176 = new lib.wavelighttp40();
	this.instance_176.parent = this;
	this.instance_176.setTransform(1064,528);

	this.instance_177 = new lib.wavelighttp40();
	this.instance_177.parent = this;
	this.instance_177.setTransform(1036,528);

	this.instance_178 = new lib.wavelighttp40();
	this.instance_178.parent = this;
	this.instance_178.setTransform(1008,528);

	this.instance_179 = new lib.wavelighttp40();
	this.instance_179.parent = this;
	this.instance_179.setTransform(980,528);

	this.instance_180 = new lib.wavelighttp40();
	this.instance_180.parent = this;
	this.instance_180.setTransform(952,528);

	this.instance_181 = new lib.wavelighttp40();
	this.instance_181.parent = this;
	this.instance_181.setTransform(924,528);

	this.instance_182 = new lib.wavelighttp40();
	this.instance_182.parent = this;
	this.instance_182.setTransform(896,528);

	this.instance_183 = new lib.wavelighttp40();
	this.instance_183.parent = this;
	this.instance_183.setTransform(868,528);

	this.instance_184 = new lib.wavelighttp40();
	this.instance_184.parent = this;
	this.instance_184.setTransform(840,528);

	this.instance_185 = new lib.wavelighttp40();
	this.instance_185.parent = this;
	this.instance_185.setTransform(812,528);

	this.instance_186 = new lib.wavelighttp40();
	this.instance_186.parent = this;
	this.instance_186.setTransform(784,528);

	this.instance_187 = new lib.wavelighttp40();
	this.instance_187.parent = this;
	this.instance_187.setTransform(756,528);

	this.instance_188 = new lib.wavelighttp40();
	this.instance_188.parent = this;
	this.instance_188.setTransform(728,528);

	this.instance_189 = new lib.wavelighttp40();
	this.instance_189.parent = this;
	this.instance_189.setTransform(700,528);

	this.instance_190 = new lib.wavelighttp40();
	this.instance_190.parent = this;
	this.instance_190.setTransform(672,528);

	this.instance_191 = new lib.wavelighttp40();
	this.instance_191.parent = this;
	this.instance_191.setTransform(644,528);

	this.instance_192 = new lib.wavelighttp40();
	this.instance_192.parent = this;
	this.instance_192.setTransform(616,528);

	this.instance_193 = new lib.wavelighttp40();
	this.instance_193.parent = this;
	this.instance_193.setTransform(588,528);

	this.instance_194 = new lib.wavelighttp40();
	this.instance_194.parent = this;
	this.instance_194.setTransform(560,528);

	this.instance_195 = new lib.wavelighttp40();
	this.instance_195.parent = this;
	this.instance_195.setTransform(532,528);

	this.instance_196 = new lib.wavelighttp40();
	this.instance_196.parent = this;
	this.instance_196.setTransform(504,528);

	this.instance_197 = new lib.wavelighttp40();
	this.instance_197.parent = this;
	this.instance_197.setTransform(476,528);

	this.instance_198 = new lib.wavelighttp40();
	this.instance_198.parent = this;
	this.instance_198.setTransform(448,528);

	this.instance_199 = new lib.wavelighttp40();
	this.instance_199.parent = this;
	this.instance_199.setTransform(420,528);

	this.instance_200 = new lib.wavelighttp40();
	this.instance_200.parent = this;
	this.instance_200.setTransform(392,528);

	this.instance_201 = new lib.wavelighttp40();
	this.instance_201.parent = this;
	this.instance_201.setTransform(364,528);

	this.instance_202 = new lib.wavelighttp40();
	this.instance_202.parent = this;
	this.instance_202.setTransform(336,528);

	this.instance_203 = new lib.wavelighttp40();
	this.instance_203.parent = this;
	this.instance_203.setTransform(308,528);

	this.instance_204 = new lib.wavelighttp40();
	this.instance_204.parent = this;
	this.instance_204.setTransform(280,528);

	this.instance_205 = new lib.wavelighttp40();
	this.instance_205.parent = this;
	this.instance_205.setTransform(252,528);

	this.instance_206 = new lib.wavelighttp40();
	this.instance_206.parent = this;
	this.instance_206.setTransform(224,528);

	this.instance_207 = new lib.wavelighttp40();
	this.instance_207.parent = this;
	this.instance_207.setTransform(196,528);

	this.instance_208 = new lib.wavelighttp40();
	this.instance_208.parent = this;
	this.instance_208.setTransform(168,528);

	this.instance_209 = new lib.wavelighttp40();
	this.instance_209.parent = this;
	this.instance_209.setTransform(140,528);

	this.instance_210 = new lib.wavelighttp40();
	this.instance_210.parent = this;
	this.instance_210.setTransform(112,528);

	this.instance_211 = new lib.wavelighttp40();
	this.instance_211.parent = this;
	this.instance_211.setTransform(84,528);

	this.instance_212 = new lib.wavelighttp40();
	this.instance_212.parent = this;
	this.instance_212.setTransform(56,528);

	this.instance_213 = new lib.wavelighttp40();
	this.instance_213.parent = this;
	this.instance_213.setTransform(28,528);

	this.instance_214 = new lib.wavelighttp40();
	this.instance_214.parent = this;
	this.instance_214.setTransform(0,528);

	this.instance_215 = new lib.wavelighttp40();
	this.instance_215.parent = this;
	this.instance_215.setTransform(1176,504);

	this.instance_216 = new lib.wavelighttp40();
	this.instance_216.parent = this;
	this.instance_216.setTransform(1148,504);

	this.instance_217 = new lib.wavelighttp40();
	this.instance_217.parent = this;
	this.instance_217.setTransform(1120,504);

	this.instance_218 = new lib.wavelighttp40();
	this.instance_218.parent = this;
	this.instance_218.setTransform(1092,504);

	this.instance_219 = new lib.wavelighttp40();
	this.instance_219.parent = this;
	this.instance_219.setTransform(1064,504);

	this.instance_220 = new lib.wavelighttp40();
	this.instance_220.parent = this;
	this.instance_220.setTransform(1036,504);

	this.instance_221 = new lib.wavelighttp40();
	this.instance_221.parent = this;
	this.instance_221.setTransform(1008,504);

	this.instance_222 = new lib.wavelighttp40();
	this.instance_222.parent = this;
	this.instance_222.setTransform(980,504);

	this.instance_223 = new lib.wavelighttp40();
	this.instance_223.parent = this;
	this.instance_223.setTransform(952,504);

	this.instance_224 = new lib.wavelighttp40();
	this.instance_224.parent = this;
	this.instance_224.setTransform(924,504);

	this.instance_225 = new lib.wavelighttp40();
	this.instance_225.parent = this;
	this.instance_225.setTransform(896,504);

	this.instance_226 = new lib.wavelighttp40();
	this.instance_226.parent = this;
	this.instance_226.setTransform(868,504);

	this.instance_227 = new lib.wavelighttp40();
	this.instance_227.parent = this;
	this.instance_227.setTransform(840,504);

	this.instance_228 = new lib.wavelighttp40();
	this.instance_228.parent = this;
	this.instance_228.setTransform(812,504);

	this.instance_229 = new lib.wavelighttp40();
	this.instance_229.parent = this;
	this.instance_229.setTransform(784,504);

	this.instance_230 = new lib.wavelighttp40();
	this.instance_230.parent = this;
	this.instance_230.setTransform(756,504);

	this.instance_231 = new lib.wavelighttp40();
	this.instance_231.parent = this;
	this.instance_231.setTransform(728,504);

	this.instance_232 = new lib.wavelighttp40();
	this.instance_232.parent = this;
	this.instance_232.setTransform(700,504);

	this.instance_233 = new lib.wavelighttp40();
	this.instance_233.parent = this;
	this.instance_233.setTransform(672,504);

	this.instance_234 = new lib.wavelighttp40();
	this.instance_234.parent = this;
	this.instance_234.setTransform(644,504);

	this.instance_235 = new lib.wavelighttp40();
	this.instance_235.parent = this;
	this.instance_235.setTransform(616,504);

	this.instance_236 = new lib.wavelighttp40();
	this.instance_236.parent = this;
	this.instance_236.setTransform(588,504);

	this.instance_237 = new lib.wavelighttp40();
	this.instance_237.parent = this;
	this.instance_237.setTransform(560,504);

	this.instance_238 = new lib.wavelighttp40();
	this.instance_238.parent = this;
	this.instance_238.setTransform(532,504);

	this.instance_239 = new lib.wavelighttp40();
	this.instance_239.parent = this;
	this.instance_239.setTransform(504,504);

	this.instance_240 = new lib.wavelighttp40();
	this.instance_240.parent = this;
	this.instance_240.setTransform(476,504);

	this.instance_241 = new lib.wavelighttp40();
	this.instance_241.parent = this;
	this.instance_241.setTransform(448,504);

	this.instance_242 = new lib.wavelighttp40();
	this.instance_242.parent = this;
	this.instance_242.setTransform(420,504);

	this.instance_243 = new lib.wavelighttp40();
	this.instance_243.parent = this;
	this.instance_243.setTransform(392,504);

	this.instance_244 = new lib.wavelighttp40();
	this.instance_244.parent = this;
	this.instance_244.setTransform(364,504);

	this.instance_245 = new lib.wavelighttp40();
	this.instance_245.parent = this;
	this.instance_245.setTransform(336,504);

	this.instance_246 = new lib.wavelighttp40();
	this.instance_246.parent = this;
	this.instance_246.setTransform(308,504);

	this.instance_247 = new lib.wavelighttp40();
	this.instance_247.parent = this;
	this.instance_247.setTransform(280,504);

	this.instance_248 = new lib.wavelighttp40();
	this.instance_248.parent = this;
	this.instance_248.setTransform(252,504);

	this.instance_249 = new lib.wavelighttp40();
	this.instance_249.parent = this;
	this.instance_249.setTransform(224,504);

	this.instance_250 = new lib.wavelighttp40();
	this.instance_250.parent = this;
	this.instance_250.setTransform(196,504);

	this.instance_251 = new lib.wavelighttp40();
	this.instance_251.parent = this;
	this.instance_251.setTransform(168,504);

	this.instance_252 = new lib.wavelighttp40();
	this.instance_252.parent = this;
	this.instance_252.setTransform(140,504);

	this.instance_253 = new lib.wavelighttp40();
	this.instance_253.parent = this;
	this.instance_253.setTransform(112,504);

	this.instance_254 = new lib.wavelighttp40();
	this.instance_254.parent = this;
	this.instance_254.setTransform(84,504);

	this.instance_255 = new lib.wavelighttp40();
	this.instance_255.parent = this;
	this.instance_255.setTransform(56,504);

	this.instance_256 = new lib.wavelighttp40();
	this.instance_256.parent = this;
	this.instance_256.setTransform(28,504);

	this.instance_257 = new lib.wavelighttp40();
	this.instance_257.parent = this;
	this.instance_257.setTransform(0,504);

	this.instance_258 = new lib.wavelighttp40();
	this.instance_258.parent = this;
	this.instance_258.setTransform(1176,480);

	this.instance_259 = new lib.wavelighttp40();
	this.instance_259.parent = this;
	this.instance_259.setTransform(1148,480);

	this.instance_260 = new lib.wavelighttp40();
	this.instance_260.parent = this;
	this.instance_260.setTransform(1120,480);

	this.instance_261 = new lib.wavelighttp40();
	this.instance_261.parent = this;
	this.instance_261.setTransform(1092,480);

	this.instance_262 = new lib.wavelighttp40();
	this.instance_262.parent = this;
	this.instance_262.setTransform(1064,480);

	this.instance_263 = new lib.wavelighttp40();
	this.instance_263.parent = this;
	this.instance_263.setTransform(1036,480);

	this.instance_264 = new lib.wavelighttp40();
	this.instance_264.parent = this;
	this.instance_264.setTransform(1008,480);

	this.instance_265 = new lib.wavelighttp40();
	this.instance_265.parent = this;
	this.instance_265.setTransform(980,480);

	this.instance_266 = new lib.wavelighttp40();
	this.instance_266.parent = this;
	this.instance_266.setTransform(952,480);

	this.instance_267 = new lib.wavelighttp40();
	this.instance_267.parent = this;
	this.instance_267.setTransform(924,480);

	this.instance_268 = new lib.wavelighttp40();
	this.instance_268.parent = this;
	this.instance_268.setTransform(896,480);

	this.instance_269 = new lib.wavelighttp40();
	this.instance_269.parent = this;
	this.instance_269.setTransform(868,480);

	this.instance_270 = new lib.wavelighttp40();
	this.instance_270.parent = this;
	this.instance_270.setTransform(840,480);

	this.instance_271 = new lib.wavelighttp40();
	this.instance_271.parent = this;
	this.instance_271.setTransform(812,480);

	this.instance_272 = new lib.wavelighttp40();
	this.instance_272.parent = this;
	this.instance_272.setTransform(784,480);

	this.instance_273 = new lib.wavelighttp40();
	this.instance_273.parent = this;
	this.instance_273.setTransform(756,480);

	this.instance_274 = new lib.wavelighttp40();
	this.instance_274.parent = this;
	this.instance_274.setTransform(728,480);

	this.instance_275 = new lib.wavelighttp40();
	this.instance_275.parent = this;
	this.instance_275.setTransform(700,480);

	this.instance_276 = new lib.wavelighttp40();
	this.instance_276.parent = this;
	this.instance_276.setTransform(672,480);

	this.instance_277 = new lib.wavelighttp40();
	this.instance_277.parent = this;
	this.instance_277.setTransform(644,480);

	this.instance_278 = new lib.wavelighttp40();
	this.instance_278.parent = this;
	this.instance_278.setTransform(616,480);

	this.instance_279 = new lib.wavelighttp40();
	this.instance_279.parent = this;
	this.instance_279.setTransform(588,480);

	this.instance_280 = new lib.wavelighttp40();
	this.instance_280.parent = this;
	this.instance_280.setTransform(560,480);

	this.instance_281 = new lib.wavelighttp40();
	this.instance_281.parent = this;
	this.instance_281.setTransform(532,480);

	this.instance_282 = new lib.wavelighttp40();
	this.instance_282.parent = this;
	this.instance_282.setTransform(504,480);

	this.instance_283 = new lib.wavelighttp40();
	this.instance_283.parent = this;
	this.instance_283.setTransform(476,480);

	this.instance_284 = new lib.wavelighttp40();
	this.instance_284.parent = this;
	this.instance_284.setTransform(448,480);

	this.instance_285 = new lib.wavelighttp40();
	this.instance_285.parent = this;
	this.instance_285.setTransform(420,480);

	this.instance_286 = new lib.wavelighttp40();
	this.instance_286.parent = this;
	this.instance_286.setTransform(392,480);

	this.instance_287 = new lib.wavelighttp40();
	this.instance_287.parent = this;
	this.instance_287.setTransform(364,480);

	this.instance_288 = new lib.wavelighttp40();
	this.instance_288.parent = this;
	this.instance_288.setTransform(336,480);

	this.instance_289 = new lib.wavelighttp40();
	this.instance_289.parent = this;
	this.instance_289.setTransform(308,480);

	this.instance_290 = new lib.wavelighttp40();
	this.instance_290.parent = this;
	this.instance_290.setTransform(280,480);

	this.instance_291 = new lib.wavelighttp40();
	this.instance_291.parent = this;
	this.instance_291.setTransform(252,480);

	this.instance_292 = new lib.wavelighttp40();
	this.instance_292.parent = this;
	this.instance_292.setTransform(224,480);

	this.instance_293 = new lib.wavelighttp40();
	this.instance_293.parent = this;
	this.instance_293.setTransform(196,480);

	this.instance_294 = new lib.wavelighttp40();
	this.instance_294.parent = this;
	this.instance_294.setTransform(168,480);

	this.instance_295 = new lib.wavelighttp40();
	this.instance_295.parent = this;
	this.instance_295.setTransform(140,480);

	this.instance_296 = new lib.wavelighttp40();
	this.instance_296.parent = this;
	this.instance_296.setTransform(112,480);

	this.instance_297 = new lib.wavelighttp40();
	this.instance_297.parent = this;
	this.instance_297.setTransform(84,480);

	this.instance_298 = new lib.wavelighttp40();
	this.instance_298.parent = this;
	this.instance_298.setTransform(56,480);

	this.instance_299 = new lib.wavelighttp40();
	this.instance_299.parent = this;
	this.instance_299.setTransform(28,480);

	this.instance_300 = new lib.wavelighttp40();
	this.instance_300.parent = this;
	this.instance_300.setTransform(0,480);

	this.instance_301 = new lib.wavelighttp40();
	this.instance_301.parent = this;
	this.instance_301.setTransform(1176,456);

	this.instance_302 = new lib.wavelighttp40();
	this.instance_302.parent = this;
	this.instance_302.setTransform(1148,456);

	this.instance_303 = new lib.wavelighttp40();
	this.instance_303.parent = this;
	this.instance_303.setTransform(1120,456);

	this.instance_304 = new lib.wavelighttp40();
	this.instance_304.parent = this;
	this.instance_304.setTransform(1092,456);

	this.instance_305 = new lib.wavelighttp40();
	this.instance_305.parent = this;
	this.instance_305.setTransform(1064,456);

	this.instance_306 = new lib.wavelighttp40();
	this.instance_306.parent = this;
	this.instance_306.setTransform(1036,456);

	this.instance_307 = new lib.wavelighttp40();
	this.instance_307.parent = this;
	this.instance_307.setTransform(1008,456);

	this.instance_308 = new lib.wavelighttp40();
	this.instance_308.parent = this;
	this.instance_308.setTransform(980,456);

	this.instance_309 = new lib.wavelighttp40();
	this.instance_309.parent = this;
	this.instance_309.setTransform(952,456);

	this.instance_310 = new lib.wavelighttp40();
	this.instance_310.parent = this;
	this.instance_310.setTransform(924,456);

	this.instance_311 = new lib.wavelighttp40();
	this.instance_311.parent = this;
	this.instance_311.setTransform(896,456);

	this.instance_312 = new lib.wavelighttp40();
	this.instance_312.parent = this;
	this.instance_312.setTransform(868,456);

	this.instance_313 = new lib.wavelighttp40();
	this.instance_313.parent = this;
	this.instance_313.setTransform(840,456);

	this.instance_314 = new lib.wavelighttp40();
	this.instance_314.parent = this;
	this.instance_314.setTransform(812,456);

	this.instance_315 = new lib.wavelighttp40();
	this.instance_315.parent = this;
	this.instance_315.setTransform(784,456);

	this.instance_316 = new lib.wavelighttp40();
	this.instance_316.parent = this;
	this.instance_316.setTransform(756,456);

	this.instance_317 = new lib.wavelighttp40();
	this.instance_317.parent = this;
	this.instance_317.setTransform(728,456);

	this.instance_318 = new lib.wavelighttp40();
	this.instance_318.parent = this;
	this.instance_318.setTransform(700,456);

	this.instance_319 = new lib.wavelighttp40();
	this.instance_319.parent = this;
	this.instance_319.setTransform(672,456);

	this.instance_320 = new lib.wavelighttp40();
	this.instance_320.parent = this;
	this.instance_320.setTransform(644,456);

	this.instance_321 = new lib.wavelighttp40();
	this.instance_321.parent = this;
	this.instance_321.setTransform(616,456);

	this.instance_322 = new lib.wavelighttp40();
	this.instance_322.parent = this;
	this.instance_322.setTransform(588,456);

	this.instance_323 = new lib.wavelighttp40();
	this.instance_323.parent = this;
	this.instance_323.setTransform(560,456);

	this.instance_324 = new lib.wavelighttp40();
	this.instance_324.parent = this;
	this.instance_324.setTransform(532,456);

	this.instance_325 = new lib.wavelighttp40();
	this.instance_325.parent = this;
	this.instance_325.setTransform(504,456);

	this.instance_326 = new lib.wavelighttp40();
	this.instance_326.parent = this;
	this.instance_326.setTransform(476,456);

	this.instance_327 = new lib.wavelighttp40();
	this.instance_327.parent = this;
	this.instance_327.setTransform(448,456);

	this.instance_328 = new lib.wavelighttp40();
	this.instance_328.parent = this;
	this.instance_328.setTransform(420,456);

	this.instance_329 = new lib.wavelighttp40();
	this.instance_329.parent = this;
	this.instance_329.setTransform(392,456);

	this.instance_330 = new lib.wavelighttp40();
	this.instance_330.parent = this;
	this.instance_330.setTransform(364,456);

	this.instance_331 = new lib.wavelighttp40();
	this.instance_331.parent = this;
	this.instance_331.setTransform(336,456);

	this.instance_332 = new lib.wavelighttp40();
	this.instance_332.parent = this;
	this.instance_332.setTransform(308,456);

	this.instance_333 = new lib.wavelighttp40();
	this.instance_333.parent = this;
	this.instance_333.setTransform(280,456);

	this.instance_334 = new lib.wavelighttp40();
	this.instance_334.parent = this;
	this.instance_334.setTransform(252,456);

	this.instance_335 = new lib.wavelighttp40();
	this.instance_335.parent = this;
	this.instance_335.setTransform(224,456);

	this.instance_336 = new lib.wavelighttp40();
	this.instance_336.parent = this;
	this.instance_336.setTransform(196,456);

	this.instance_337 = new lib.wavelighttp40();
	this.instance_337.parent = this;
	this.instance_337.setTransform(168,456);

	this.instance_338 = new lib.wavelighttp40();
	this.instance_338.parent = this;
	this.instance_338.setTransform(140,456);

	this.instance_339 = new lib.wavelighttp40();
	this.instance_339.parent = this;
	this.instance_339.setTransform(112,456);

	this.instance_340 = new lib.wavelighttp40();
	this.instance_340.parent = this;
	this.instance_340.setTransform(84,456);

	this.instance_341 = new lib.wavelighttp40();
	this.instance_341.parent = this;
	this.instance_341.setTransform(56,456);

	this.instance_342 = new lib.wavelighttp40();
	this.instance_342.parent = this;
	this.instance_342.setTransform(28,456);

	this.instance_343 = new lib.wavelighttp40();
	this.instance_343.parent = this;
	this.instance_343.setTransform(0,456);

	this.instance_344 = new lib.wavelighttp40();
	this.instance_344.parent = this;
	this.instance_344.setTransform(1176,432);

	this.instance_345 = new lib.wavelighttp40();
	this.instance_345.parent = this;
	this.instance_345.setTransform(1148,432);

	this.instance_346 = new lib.wavelighttp40();
	this.instance_346.parent = this;
	this.instance_346.setTransform(1120,432);

	this.instance_347 = new lib.wavelighttp40();
	this.instance_347.parent = this;
	this.instance_347.setTransform(1092,432);

	this.instance_348 = new lib.wavelighttp40();
	this.instance_348.parent = this;
	this.instance_348.setTransform(1064,432);

	this.instance_349 = new lib.wavelighttp40();
	this.instance_349.parent = this;
	this.instance_349.setTransform(1036,432);

	this.instance_350 = new lib.wavelighttp40();
	this.instance_350.parent = this;
	this.instance_350.setTransform(1008,432);

	this.instance_351 = new lib.wavelighttp40();
	this.instance_351.parent = this;
	this.instance_351.setTransform(980,432);

	this.instance_352 = new lib.wavelighttp40();
	this.instance_352.parent = this;
	this.instance_352.setTransform(952,432);

	this.instance_353 = new lib.wavelighttp40();
	this.instance_353.parent = this;
	this.instance_353.setTransform(924,432);

	this.instance_354 = new lib.wavelighttp40();
	this.instance_354.parent = this;
	this.instance_354.setTransform(896,432);

	this.instance_355 = new lib.wavelighttp40();
	this.instance_355.parent = this;
	this.instance_355.setTransform(868,432);

	this.instance_356 = new lib.wavelighttp40();
	this.instance_356.parent = this;
	this.instance_356.setTransform(840,432);

	this.instance_357 = new lib.wavelighttp40();
	this.instance_357.parent = this;
	this.instance_357.setTransform(812,432);

	this.instance_358 = new lib.wavelighttp40();
	this.instance_358.parent = this;
	this.instance_358.setTransform(784,432);

	this.instance_359 = new lib.wavelighttp40();
	this.instance_359.parent = this;
	this.instance_359.setTransform(756,432);

	this.instance_360 = new lib.wavelighttp40();
	this.instance_360.parent = this;
	this.instance_360.setTransform(728,432);

	this.instance_361 = new lib.wavelighttp40();
	this.instance_361.parent = this;
	this.instance_361.setTransform(700,432);

	this.instance_362 = new lib.wavelighttp40();
	this.instance_362.parent = this;
	this.instance_362.setTransform(672,432);

	this.instance_363 = new lib.wavelighttp40();
	this.instance_363.parent = this;
	this.instance_363.setTransform(644,432);

	this.instance_364 = new lib.wavelighttp40();
	this.instance_364.parent = this;
	this.instance_364.setTransform(616,432);

	this.instance_365 = new lib.wavelighttp40();
	this.instance_365.parent = this;
	this.instance_365.setTransform(588,432);

	this.instance_366 = new lib.wavelighttp40();
	this.instance_366.parent = this;
	this.instance_366.setTransform(560,432);

	this.instance_367 = new lib.wavelighttp40();
	this.instance_367.parent = this;
	this.instance_367.setTransform(532,432);

	this.instance_368 = new lib.wavelighttp40();
	this.instance_368.parent = this;
	this.instance_368.setTransform(504,432);

	this.instance_369 = new lib.wavelighttp40();
	this.instance_369.parent = this;
	this.instance_369.setTransform(476,432);

	this.instance_370 = new lib.wavelighttp40();
	this.instance_370.parent = this;
	this.instance_370.setTransform(448,432);

	this.instance_371 = new lib.wavelighttp40();
	this.instance_371.parent = this;
	this.instance_371.setTransform(420,432);

	this.instance_372 = new lib.wavelighttp40();
	this.instance_372.parent = this;
	this.instance_372.setTransform(392,432);

	this.instance_373 = new lib.wavelighttp40();
	this.instance_373.parent = this;
	this.instance_373.setTransform(364,432);

	this.instance_374 = new lib.wavelighttp40();
	this.instance_374.parent = this;
	this.instance_374.setTransform(336,432);

	this.instance_375 = new lib.wavelighttp40();
	this.instance_375.parent = this;
	this.instance_375.setTransform(308,432);

	this.instance_376 = new lib.wavelighttp40();
	this.instance_376.parent = this;
	this.instance_376.setTransform(280,432);

	this.instance_377 = new lib.wavelighttp40();
	this.instance_377.parent = this;
	this.instance_377.setTransform(252,432);

	this.instance_378 = new lib.wavelighttp40();
	this.instance_378.parent = this;
	this.instance_378.setTransform(224,432);

	this.instance_379 = new lib.wavelighttp40();
	this.instance_379.parent = this;
	this.instance_379.setTransform(196,432);

	this.instance_380 = new lib.wavelighttp40();
	this.instance_380.parent = this;
	this.instance_380.setTransform(168,432);

	this.instance_381 = new lib.wavelighttp40();
	this.instance_381.parent = this;
	this.instance_381.setTransform(140,432);

	this.instance_382 = new lib.wavelighttp40();
	this.instance_382.parent = this;
	this.instance_382.setTransform(112,432);

	this.instance_383 = new lib.wavelighttp40();
	this.instance_383.parent = this;
	this.instance_383.setTransform(84,432);

	this.instance_384 = new lib.wavelighttp40();
	this.instance_384.parent = this;
	this.instance_384.setTransform(56,432);

	this.instance_385 = new lib.wavelighttp40();
	this.instance_385.parent = this;
	this.instance_385.setTransform(28,432);

	this.instance_386 = new lib.wavelighttp40();
	this.instance_386.parent = this;
	this.instance_386.setTransform(0,432);

	this.instance_387 = new lib.wavelighttp40();
	this.instance_387.parent = this;
	this.instance_387.setTransform(1176,408);

	this.instance_388 = new lib.wavelighttp40();
	this.instance_388.parent = this;
	this.instance_388.setTransform(1148,408);

	this.instance_389 = new lib.wavelighttp40();
	this.instance_389.parent = this;
	this.instance_389.setTransform(1120,408);

	this.instance_390 = new lib.wavelighttp40();
	this.instance_390.parent = this;
	this.instance_390.setTransform(1092,408);

	this.instance_391 = new lib.wavelighttp40();
	this.instance_391.parent = this;
	this.instance_391.setTransform(1064,408);

	this.instance_392 = new lib.wavelighttp40();
	this.instance_392.parent = this;
	this.instance_392.setTransform(1036,408);

	this.instance_393 = new lib.wavelighttp40();
	this.instance_393.parent = this;
	this.instance_393.setTransform(1008,408);

	this.instance_394 = new lib.wavelighttp40();
	this.instance_394.parent = this;
	this.instance_394.setTransform(980,408);

	this.instance_395 = new lib.wavelighttp40();
	this.instance_395.parent = this;
	this.instance_395.setTransform(952,408);

	this.instance_396 = new lib.wavelighttp40();
	this.instance_396.parent = this;
	this.instance_396.setTransform(924,408);

	this.instance_397 = new lib.wavelighttp40();
	this.instance_397.parent = this;
	this.instance_397.setTransform(896,408);

	this.instance_398 = new lib.wavelighttp40();
	this.instance_398.parent = this;
	this.instance_398.setTransform(868,408);

	this.instance_399 = new lib.wavelighttp40();
	this.instance_399.parent = this;
	this.instance_399.setTransform(840,408);

	this.instance_400 = new lib.wavelighttp40();
	this.instance_400.parent = this;
	this.instance_400.setTransform(812,408);

	this.instance_401 = new lib.wavelighttp40();
	this.instance_401.parent = this;
	this.instance_401.setTransform(784,408);

	this.instance_402 = new lib.wavelighttp40();
	this.instance_402.parent = this;
	this.instance_402.setTransform(756,408);

	this.instance_403 = new lib.wavelighttp40();
	this.instance_403.parent = this;
	this.instance_403.setTransform(728,408);

	this.instance_404 = new lib.wavelighttp40();
	this.instance_404.parent = this;
	this.instance_404.setTransform(700,408);

	this.instance_405 = new lib.wavelighttp40();
	this.instance_405.parent = this;
	this.instance_405.setTransform(672,408);

	this.instance_406 = new lib.wavelighttp40();
	this.instance_406.parent = this;
	this.instance_406.setTransform(644,408);

	this.instance_407 = new lib.wavelighttp40();
	this.instance_407.parent = this;
	this.instance_407.setTransform(616,408);

	this.instance_408 = new lib.wavelighttp40();
	this.instance_408.parent = this;
	this.instance_408.setTransform(588,408);

	this.instance_409 = new lib.wavelighttp40();
	this.instance_409.parent = this;
	this.instance_409.setTransform(560,408);

	this.instance_410 = new lib.wavelighttp40();
	this.instance_410.parent = this;
	this.instance_410.setTransform(532,408);

	this.instance_411 = new lib.wavelighttp40();
	this.instance_411.parent = this;
	this.instance_411.setTransform(504,408);

	this.instance_412 = new lib.wavelighttp40();
	this.instance_412.parent = this;
	this.instance_412.setTransform(476,408);

	this.instance_413 = new lib.wavelighttp40();
	this.instance_413.parent = this;
	this.instance_413.setTransform(448,408);

	this.instance_414 = new lib.wavelighttp40();
	this.instance_414.parent = this;
	this.instance_414.setTransform(420,408);

	this.instance_415 = new lib.wavelighttp40();
	this.instance_415.parent = this;
	this.instance_415.setTransform(392,408);

	this.instance_416 = new lib.wavelighttp40();
	this.instance_416.parent = this;
	this.instance_416.setTransform(364,408);

	this.instance_417 = new lib.wavelighttp40();
	this.instance_417.parent = this;
	this.instance_417.setTransform(336,408);

	this.instance_418 = new lib.wavelighttp40();
	this.instance_418.parent = this;
	this.instance_418.setTransform(308,408);

	this.instance_419 = new lib.wavelighttp40();
	this.instance_419.parent = this;
	this.instance_419.setTransform(280,408);

	this.instance_420 = new lib.wavelighttp40();
	this.instance_420.parent = this;
	this.instance_420.setTransform(252,408);

	this.instance_421 = new lib.wavelighttp40();
	this.instance_421.parent = this;
	this.instance_421.setTransform(224,408);

	this.instance_422 = new lib.wavelighttp40();
	this.instance_422.parent = this;
	this.instance_422.setTransform(196,408);

	this.instance_423 = new lib.wavelighttp40();
	this.instance_423.parent = this;
	this.instance_423.setTransform(168,408);

	this.instance_424 = new lib.wavelighttp40();
	this.instance_424.parent = this;
	this.instance_424.setTransform(140,408);

	this.instance_425 = new lib.wavelighttp40();
	this.instance_425.parent = this;
	this.instance_425.setTransform(112,408);

	this.instance_426 = new lib.wavelighttp40();
	this.instance_426.parent = this;
	this.instance_426.setTransform(84,408);

	this.instance_427 = new lib.wavelighttp40();
	this.instance_427.parent = this;
	this.instance_427.setTransform(56,408);

	this.instance_428 = new lib.wavelighttp40();
	this.instance_428.parent = this;
	this.instance_428.setTransform(28,408);

	this.instance_429 = new lib.wavelighttp40();
	this.instance_429.parent = this;
	this.instance_429.setTransform(0,408);

	this.instance_430 = new lib.wavelighttp40();
	this.instance_430.parent = this;
	this.instance_430.setTransform(1176,384);

	this.instance_431 = new lib.wavelighttp40();
	this.instance_431.parent = this;
	this.instance_431.setTransform(1148,384);

	this.instance_432 = new lib.wavelighttp40();
	this.instance_432.parent = this;
	this.instance_432.setTransform(1120,384);

	this.instance_433 = new lib.wavelighttp40();
	this.instance_433.parent = this;
	this.instance_433.setTransform(1092,384);

	this.instance_434 = new lib.wavelighttp40();
	this.instance_434.parent = this;
	this.instance_434.setTransform(1064,384);

	this.instance_435 = new lib.wavelighttp40();
	this.instance_435.parent = this;
	this.instance_435.setTransform(1036,384);

	this.instance_436 = new lib.wavelighttp40();
	this.instance_436.parent = this;
	this.instance_436.setTransform(1008,384);

	this.instance_437 = new lib.wavelighttp40();
	this.instance_437.parent = this;
	this.instance_437.setTransform(980,384);

	this.instance_438 = new lib.wavelighttp40();
	this.instance_438.parent = this;
	this.instance_438.setTransform(952,384);

	this.instance_439 = new lib.wavelighttp40();
	this.instance_439.parent = this;
	this.instance_439.setTransform(924,384);

	this.instance_440 = new lib.wavelighttp40();
	this.instance_440.parent = this;
	this.instance_440.setTransform(896,384);

	this.instance_441 = new lib.wavelighttp40();
	this.instance_441.parent = this;
	this.instance_441.setTransform(868,384);

	this.instance_442 = new lib.wavelighttp40();
	this.instance_442.parent = this;
	this.instance_442.setTransform(840,384);

	this.instance_443 = new lib.wavelighttp40();
	this.instance_443.parent = this;
	this.instance_443.setTransform(812,384);

	this.instance_444 = new lib.wavelighttp40();
	this.instance_444.parent = this;
	this.instance_444.setTransform(784,384);

	this.instance_445 = new lib.wavelighttp40();
	this.instance_445.parent = this;
	this.instance_445.setTransform(756,384);

	this.instance_446 = new lib.wavelighttp40();
	this.instance_446.parent = this;
	this.instance_446.setTransform(728,384);

	this.instance_447 = new lib.wavelighttp40();
	this.instance_447.parent = this;
	this.instance_447.setTransform(700,384);

	this.instance_448 = new lib.wavelighttp40();
	this.instance_448.parent = this;
	this.instance_448.setTransform(672,384);

	this.instance_449 = new lib.wavelighttp40();
	this.instance_449.parent = this;
	this.instance_449.setTransform(644,384);

	this.instance_450 = new lib.wavelighttp40();
	this.instance_450.parent = this;
	this.instance_450.setTransform(616,384);

	this.instance_451 = new lib.wavelighttp40();
	this.instance_451.parent = this;
	this.instance_451.setTransform(588,384);

	this.instance_452 = new lib.wavelighttp40();
	this.instance_452.parent = this;
	this.instance_452.setTransform(560,384);

	this.instance_453 = new lib.wavelighttp40();
	this.instance_453.parent = this;
	this.instance_453.setTransform(532,384);

	this.instance_454 = new lib.wavelighttp40();
	this.instance_454.parent = this;
	this.instance_454.setTransform(504,384);

	this.instance_455 = new lib.wavelighttp40();
	this.instance_455.parent = this;
	this.instance_455.setTransform(476,384);

	this.instance_456 = new lib.wavelighttp40();
	this.instance_456.parent = this;
	this.instance_456.setTransform(448,384);

	this.instance_457 = new lib.wavelighttp40();
	this.instance_457.parent = this;
	this.instance_457.setTransform(420,384);

	this.instance_458 = new lib.wavelighttp40();
	this.instance_458.parent = this;
	this.instance_458.setTransform(392,384);

	this.instance_459 = new lib.wavelighttp40();
	this.instance_459.parent = this;
	this.instance_459.setTransform(364,384);

	this.instance_460 = new lib.wavelighttp40();
	this.instance_460.parent = this;
	this.instance_460.setTransform(336,384);

	this.instance_461 = new lib.wavelighttp40();
	this.instance_461.parent = this;
	this.instance_461.setTransform(308,384);

	this.instance_462 = new lib.wavelighttp40();
	this.instance_462.parent = this;
	this.instance_462.setTransform(280,384);

	this.instance_463 = new lib.wavelighttp40();
	this.instance_463.parent = this;
	this.instance_463.setTransform(252,384);

	this.instance_464 = new lib.wavelighttp40();
	this.instance_464.parent = this;
	this.instance_464.setTransform(224,384);

	this.instance_465 = new lib.wavelighttp40();
	this.instance_465.parent = this;
	this.instance_465.setTransform(196,384);

	this.instance_466 = new lib.wavelighttp40();
	this.instance_466.parent = this;
	this.instance_466.setTransform(168,384);

	this.instance_467 = new lib.wavelighttp40();
	this.instance_467.parent = this;
	this.instance_467.setTransform(140,384);

	this.instance_468 = new lib.wavelighttp40();
	this.instance_468.parent = this;
	this.instance_468.setTransform(112,384);

	this.instance_469 = new lib.wavelighttp40();
	this.instance_469.parent = this;
	this.instance_469.setTransform(84,384);

	this.instance_470 = new lib.wavelighttp40();
	this.instance_470.parent = this;
	this.instance_470.setTransform(56,384);

	this.instance_471 = new lib.wavelighttp40();
	this.instance_471.parent = this;
	this.instance_471.setTransform(28,384);

	this.instance_472 = new lib.wavelighttp40();
	this.instance_472.parent = this;
	this.instance_472.setTransform(0,384);

	this.instance_473 = new lib.wavelighttp40();
	this.instance_473.parent = this;
	this.instance_473.setTransform(1176,360);

	this.instance_474 = new lib.wavelighttp40();
	this.instance_474.parent = this;
	this.instance_474.setTransform(1148,360);

	this.instance_475 = new lib.wavelighttp40();
	this.instance_475.parent = this;
	this.instance_475.setTransform(1120,360);

	this.instance_476 = new lib.wavelighttp40();
	this.instance_476.parent = this;
	this.instance_476.setTransform(1092,360);

	this.instance_477 = new lib.wavelighttp40();
	this.instance_477.parent = this;
	this.instance_477.setTransform(1064,360);

	this.instance_478 = new lib.wavelighttp40();
	this.instance_478.parent = this;
	this.instance_478.setTransform(1036,360);

	this.instance_479 = new lib.wavelighttp40();
	this.instance_479.parent = this;
	this.instance_479.setTransform(1008,360);

	this.instance_480 = new lib.wavelighttp40();
	this.instance_480.parent = this;
	this.instance_480.setTransform(980,360);

	this.instance_481 = new lib.wavelighttp40();
	this.instance_481.parent = this;
	this.instance_481.setTransform(952,360);

	this.instance_482 = new lib.wavelighttp40();
	this.instance_482.parent = this;
	this.instance_482.setTransform(924,360);

	this.instance_483 = new lib.wavelighttp40();
	this.instance_483.parent = this;
	this.instance_483.setTransform(896,360);

	this.instance_484 = new lib.wavelighttp40();
	this.instance_484.parent = this;
	this.instance_484.setTransform(868,360);

	this.instance_485 = new lib.wavelighttp40();
	this.instance_485.parent = this;
	this.instance_485.setTransform(840,360);

	this.instance_486 = new lib.wavelighttp40();
	this.instance_486.parent = this;
	this.instance_486.setTransform(812,360);

	this.instance_487 = new lib.wavelighttp40();
	this.instance_487.parent = this;
	this.instance_487.setTransform(784,360);

	this.instance_488 = new lib.wavelighttp40();
	this.instance_488.parent = this;
	this.instance_488.setTransform(756,360);

	this.instance_489 = new lib.wavelighttp40();
	this.instance_489.parent = this;
	this.instance_489.setTransform(728,360);

	this.instance_490 = new lib.wavelighttp40();
	this.instance_490.parent = this;
	this.instance_490.setTransform(700,360);

	this.instance_491 = new lib.wavelighttp40();
	this.instance_491.parent = this;
	this.instance_491.setTransform(672,360);

	this.instance_492 = new lib.wavelighttp40();
	this.instance_492.parent = this;
	this.instance_492.setTransform(644,360);

	this.instance_493 = new lib.wavelighttp40();
	this.instance_493.parent = this;
	this.instance_493.setTransform(616,360);

	this.instance_494 = new lib.wavelighttp40();
	this.instance_494.parent = this;
	this.instance_494.setTransform(588,360);

	this.instance_495 = new lib.wavelighttp40();
	this.instance_495.parent = this;
	this.instance_495.setTransform(560,360);

	this.instance_496 = new lib.wavelighttp40();
	this.instance_496.parent = this;
	this.instance_496.setTransform(532,360);

	this.instance_497 = new lib.wavelighttp40();
	this.instance_497.parent = this;
	this.instance_497.setTransform(504,360);

	this.instance_498 = new lib.wavelighttp40();
	this.instance_498.parent = this;
	this.instance_498.setTransform(476,360);

	this.instance_499 = new lib.wavelighttp40();
	this.instance_499.parent = this;
	this.instance_499.setTransform(448,360);

	this.instance_500 = new lib.wavelighttp40();
	this.instance_500.parent = this;
	this.instance_500.setTransform(420,360);

	this.instance_501 = new lib.wavelighttp40();
	this.instance_501.parent = this;
	this.instance_501.setTransform(392,360);

	this.instance_502 = new lib.wavelighttp40();
	this.instance_502.parent = this;
	this.instance_502.setTransform(364,360);

	this.instance_503 = new lib.wavelighttp40();
	this.instance_503.parent = this;
	this.instance_503.setTransform(336,360);

	this.instance_504 = new lib.wavelighttp40();
	this.instance_504.parent = this;
	this.instance_504.setTransform(308,360);

	this.instance_505 = new lib.wavelighttp40();
	this.instance_505.parent = this;
	this.instance_505.setTransform(280,360);

	this.instance_506 = new lib.wavelighttp40();
	this.instance_506.parent = this;
	this.instance_506.setTransform(252,360);

	this.instance_507 = new lib.wavelighttp40();
	this.instance_507.parent = this;
	this.instance_507.setTransform(224,360);

	this.instance_508 = new lib.wavelighttp40();
	this.instance_508.parent = this;
	this.instance_508.setTransform(196,360);

	this.instance_509 = new lib.wavelighttp40();
	this.instance_509.parent = this;
	this.instance_509.setTransform(168,360);

	this.instance_510 = new lib.wavelighttp40();
	this.instance_510.parent = this;
	this.instance_510.setTransform(140,360);

	this.instance_511 = new lib.wavelighttp40();
	this.instance_511.parent = this;
	this.instance_511.setTransform(112,360);

	this.instance_512 = new lib.wavelighttp40();
	this.instance_512.parent = this;
	this.instance_512.setTransform(84,360);

	this.instance_513 = new lib.wavelighttp40();
	this.instance_513.parent = this;
	this.instance_513.setTransform(56,360);

	this.instance_514 = new lib.wavelighttp40();
	this.instance_514.parent = this;
	this.instance_514.setTransform(28,360);

	this.instance_515 = new lib.wavelighttp40();
	this.instance_515.parent = this;
	this.instance_515.setTransform(0,360);

	this.instance_516 = new lib.wavelighttp40();
	this.instance_516.parent = this;
	this.instance_516.setTransform(1176,336);

	this.instance_517 = new lib.wavelighttp40();
	this.instance_517.parent = this;
	this.instance_517.setTransform(1148,336);

	this.instance_518 = new lib.wavelighttp40();
	this.instance_518.parent = this;
	this.instance_518.setTransform(1120,336);

	this.instance_519 = new lib.wavelighttp40();
	this.instance_519.parent = this;
	this.instance_519.setTransform(1092,336);

	this.instance_520 = new lib.wavelighttp40();
	this.instance_520.parent = this;
	this.instance_520.setTransform(1064,336);

	this.instance_521 = new lib.wavelighttp40();
	this.instance_521.parent = this;
	this.instance_521.setTransform(1036,336);

	this.instance_522 = new lib.wavelighttp40();
	this.instance_522.parent = this;
	this.instance_522.setTransform(1008,336);

	this.instance_523 = new lib.wavelighttp40();
	this.instance_523.parent = this;
	this.instance_523.setTransform(980,336);

	this.instance_524 = new lib.wavelighttp40();
	this.instance_524.parent = this;
	this.instance_524.setTransform(952,336);

	this.instance_525 = new lib.wavelighttp40();
	this.instance_525.parent = this;
	this.instance_525.setTransform(924,336);

	this.instance_526 = new lib.wavelighttp40();
	this.instance_526.parent = this;
	this.instance_526.setTransform(896,336);

	this.instance_527 = new lib.wavelighttp40();
	this.instance_527.parent = this;
	this.instance_527.setTransform(868,336);

	this.instance_528 = new lib.wavelighttp40();
	this.instance_528.parent = this;
	this.instance_528.setTransform(840,336);

	this.instance_529 = new lib.wavelighttp40();
	this.instance_529.parent = this;
	this.instance_529.setTransform(812,336);

	this.instance_530 = new lib.wavelighttp40();
	this.instance_530.parent = this;
	this.instance_530.setTransform(784,336);

	this.instance_531 = new lib.wavelighttp40();
	this.instance_531.parent = this;
	this.instance_531.setTransform(756,336);

	this.instance_532 = new lib.wavelighttp40();
	this.instance_532.parent = this;
	this.instance_532.setTransform(728,336);

	this.instance_533 = new lib.wavelighttp40();
	this.instance_533.parent = this;
	this.instance_533.setTransform(700,336);

	this.instance_534 = new lib.wavelighttp40();
	this.instance_534.parent = this;
	this.instance_534.setTransform(672,336);

	this.instance_535 = new lib.wavelighttp40();
	this.instance_535.parent = this;
	this.instance_535.setTransform(644,336);

	this.instance_536 = new lib.wavelighttp40();
	this.instance_536.parent = this;
	this.instance_536.setTransform(616,336);

	this.instance_537 = new lib.wavelighttp40();
	this.instance_537.parent = this;
	this.instance_537.setTransform(588,336);

	this.instance_538 = new lib.wavelighttp40();
	this.instance_538.parent = this;
	this.instance_538.setTransform(560,336);

	this.instance_539 = new lib.wavelighttp40();
	this.instance_539.parent = this;
	this.instance_539.setTransform(532,336);

	this.instance_540 = new lib.wavelighttp40();
	this.instance_540.parent = this;
	this.instance_540.setTransform(504,336);

	this.instance_541 = new lib.wavelighttp40();
	this.instance_541.parent = this;
	this.instance_541.setTransform(476,336);

	this.instance_542 = new lib.wavelighttp40();
	this.instance_542.parent = this;
	this.instance_542.setTransform(448,336);

	this.instance_543 = new lib.wavelighttp40();
	this.instance_543.parent = this;
	this.instance_543.setTransform(420,336);

	this.instance_544 = new lib.wavelighttp40();
	this.instance_544.parent = this;
	this.instance_544.setTransform(392,336);

	this.instance_545 = new lib.wavelighttp40();
	this.instance_545.parent = this;
	this.instance_545.setTransform(364,336);

	this.instance_546 = new lib.wavelighttp40();
	this.instance_546.parent = this;
	this.instance_546.setTransform(336,336);

	this.instance_547 = new lib.wavelighttp40();
	this.instance_547.parent = this;
	this.instance_547.setTransform(308,336);

	this.instance_548 = new lib.wavelighttp40();
	this.instance_548.parent = this;
	this.instance_548.setTransform(280,336);

	this.instance_549 = new lib.wavelighttp40();
	this.instance_549.parent = this;
	this.instance_549.setTransform(252,336);

	this.instance_550 = new lib.wavelighttp40();
	this.instance_550.parent = this;
	this.instance_550.setTransform(224,336);

	this.instance_551 = new lib.wavelighttp40();
	this.instance_551.parent = this;
	this.instance_551.setTransform(196,336);

	this.instance_552 = new lib.wavelighttp40();
	this.instance_552.parent = this;
	this.instance_552.setTransform(168,336);

	this.instance_553 = new lib.wavelighttp40();
	this.instance_553.parent = this;
	this.instance_553.setTransform(140,336);

	this.instance_554 = new lib.wavelighttp40();
	this.instance_554.parent = this;
	this.instance_554.setTransform(112,336);

	this.instance_555 = new lib.wavelighttp40();
	this.instance_555.parent = this;
	this.instance_555.setTransform(84,336);

	this.instance_556 = new lib.wavelighttp40();
	this.instance_556.parent = this;
	this.instance_556.setTransform(56,336);

	this.instance_557 = new lib.wavelighttp40();
	this.instance_557.parent = this;
	this.instance_557.setTransform(28,336);

	this.instance_558 = new lib.wavelighttp40();
	this.instance_558.parent = this;
	this.instance_558.setTransform(0,336);

	this.instance_559 = new lib.wavelighttp40();
	this.instance_559.parent = this;
	this.instance_559.setTransform(1176,312);

	this.instance_560 = new lib.wavelighttp40();
	this.instance_560.parent = this;
	this.instance_560.setTransform(1148,312);

	this.instance_561 = new lib.wavelighttp40();
	this.instance_561.parent = this;
	this.instance_561.setTransform(1120,312);

	this.instance_562 = new lib.wavelighttp40();
	this.instance_562.parent = this;
	this.instance_562.setTransform(1092,312);

	this.instance_563 = new lib.wavelighttp40();
	this.instance_563.parent = this;
	this.instance_563.setTransform(1064,312);

	this.instance_564 = new lib.wavelighttp40();
	this.instance_564.parent = this;
	this.instance_564.setTransform(1036,312);

	this.instance_565 = new lib.wavelighttp40();
	this.instance_565.parent = this;
	this.instance_565.setTransform(1008,312);

	this.instance_566 = new lib.wavelighttp40();
	this.instance_566.parent = this;
	this.instance_566.setTransform(980,312);

	this.instance_567 = new lib.wavelighttp40();
	this.instance_567.parent = this;
	this.instance_567.setTransform(952,312);

	this.instance_568 = new lib.wavelighttp40();
	this.instance_568.parent = this;
	this.instance_568.setTransform(924,312);

	this.instance_569 = new lib.wavelighttp40();
	this.instance_569.parent = this;
	this.instance_569.setTransform(896,312);

	this.instance_570 = new lib.wavelighttp40();
	this.instance_570.parent = this;
	this.instance_570.setTransform(868,312);

	this.instance_571 = new lib.wavelighttp40();
	this.instance_571.parent = this;
	this.instance_571.setTransform(840,312);

	this.instance_572 = new lib.wavelighttp40();
	this.instance_572.parent = this;
	this.instance_572.setTransform(812,312);

	this.instance_573 = new lib.wavelighttp40();
	this.instance_573.parent = this;
	this.instance_573.setTransform(784,312);

	this.instance_574 = new lib.wavelighttp40();
	this.instance_574.parent = this;
	this.instance_574.setTransform(756,312);

	this.instance_575 = new lib.wavelighttp40();
	this.instance_575.parent = this;
	this.instance_575.setTransform(728,312);

	this.instance_576 = new lib.wavelighttp40();
	this.instance_576.parent = this;
	this.instance_576.setTransform(700,312);

	this.instance_577 = new lib.wavelighttp40();
	this.instance_577.parent = this;
	this.instance_577.setTransform(672,312);

	this.instance_578 = new lib.wavelighttp40();
	this.instance_578.parent = this;
	this.instance_578.setTransform(644,312);

	this.instance_579 = new lib.wavelighttp40();
	this.instance_579.parent = this;
	this.instance_579.setTransform(616,312);

	this.instance_580 = new lib.wavelighttp40();
	this.instance_580.parent = this;
	this.instance_580.setTransform(588,312);

	this.instance_581 = new lib.wavelighttp40();
	this.instance_581.parent = this;
	this.instance_581.setTransform(560,312);

	this.instance_582 = new lib.wavelighttp40();
	this.instance_582.parent = this;
	this.instance_582.setTransform(532,312);

	this.instance_583 = new lib.wavelighttp40();
	this.instance_583.parent = this;
	this.instance_583.setTransform(504,312);

	this.instance_584 = new lib.wavelighttp40();
	this.instance_584.parent = this;
	this.instance_584.setTransform(476,312);

	this.instance_585 = new lib.wavelighttp40();
	this.instance_585.parent = this;
	this.instance_585.setTransform(448,312);

	this.instance_586 = new lib.wavelighttp40();
	this.instance_586.parent = this;
	this.instance_586.setTransform(420,312);

	this.instance_587 = new lib.wavelighttp40();
	this.instance_587.parent = this;
	this.instance_587.setTransform(392,312);

	this.instance_588 = new lib.wavelighttp40();
	this.instance_588.parent = this;
	this.instance_588.setTransform(364,312);

	this.instance_589 = new lib.wavelighttp40();
	this.instance_589.parent = this;
	this.instance_589.setTransform(336,312);

	this.instance_590 = new lib.wavelighttp40();
	this.instance_590.parent = this;
	this.instance_590.setTransform(308,312);

	this.instance_591 = new lib.wavelighttp40();
	this.instance_591.parent = this;
	this.instance_591.setTransform(280,312);

	this.instance_592 = new lib.wavelighttp40();
	this.instance_592.parent = this;
	this.instance_592.setTransform(252,312);

	this.instance_593 = new lib.wavelighttp40();
	this.instance_593.parent = this;
	this.instance_593.setTransform(224,312);

	this.instance_594 = new lib.wavelighttp40();
	this.instance_594.parent = this;
	this.instance_594.setTransform(196,312);

	this.instance_595 = new lib.wavelighttp40();
	this.instance_595.parent = this;
	this.instance_595.setTransform(168,312);

	this.instance_596 = new lib.wavelighttp40();
	this.instance_596.parent = this;
	this.instance_596.setTransform(140,312);

	this.instance_597 = new lib.wavelighttp40();
	this.instance_597.parent = this;
	this.instance_597.setTransform(112,312);

	this.instance_598 = new lib.wavelighttp40();
	this.instance_598.parent = this;
	this.instance_598.setTransform(84,312);

	this.instance_599 = new lib.wavelighttp40();
	this.instance_599.parent = this;
	this.instance_599.setTransform(56,312);

	this.instance_600 = new lib.wavelighttp40();
	this.instance_600.parent = this;
	this.instance_600.setTransform(28,312);

	this.instance_601 = new lib.wavelighttp40();
	this.instance_601.parent = this;
	this.instance_601.setTransform(0,312);

	this.instance_602 = new lib.wavelighttp40();
	this.instance_602.parent = this;
	this.instance_602.setTransform(1176,288);

	this.instance_603 = new lib.wavelighttp40();
	this.instance_603.parent = this;
	this.instance_603.setTransform(1148,288);

	this.instance_604 = new lib.wavelighttp40();
	this.instance_604.parent = this;
	this.instance_604.setTransform(1120,288);

	this.instance_605 = new lib.wavelighttp40();
	this.instance_605.parent = this;
	this.instance_605.setTransform(1092,288);

	this.instance_606 = new lib.wavelighttp40();
	this.instance_606.parent = this;
	this.instance_606.setTransform(1064,288);

	this.instance_607 = new lib.wavelighttp40();
	this.instance_607.parent = this;
	this.instance_607.setTransform(1036,288);

	this.instance_608 = new lib.wavelighttp40();
	this.instance_608.parent = this;
	this.instance_608.setTransform(1008,288);

	this.instance_609 = new lib.wavelighttp40();
	this.instance_609.parent = this;
	this.instance_609.setTransform(980,288);

	this.instance_610 = new lib.wavelighttp40();
	this.instance_610.parent = this;
	this.instance_610.setTransform(952,288);

	this.instance_611 = new lib.wavelighttp40();
	this.instance_611.parent = this;
	this.instance_611.setTransform(924,288);

	this.instance_612 = new lib.wavelighttp40();
	this.instance_612.parent = this;
	this.instance_612.setTransform(896,288);

	this.instance_613 = new lib.wavelighttp40();
	this.instance_613.parent = this;
	this.instance_613.setTransform(868,288);

	this.instance_614 = new lib.wavelighttp40();
	this.instance_614.parent = this;
	this.instance_614.setTransform(840,288);

	this.instance_615 = new lib.wavelighttp40();
	this.instance_615.parent = this;
	this.instance_615.setTransform(812,288);

	this.instance_616 = new lib.wavelighttp40();
	this.instance_616.parent = this;
	this.instance_616.setTransform(784,288);

	this.instance_617 = new lib.wavelighttp40();
	this.instance_617.parent = this;
	this.instance_617.setTransform(756,288);

	this.instance_618 = new lib.wavelighttp40();
	this.instance_618.parent = this;
	this.instance_618.setTransform(728,288);

	this.instance_619 = new lib.wavelighttp40();
	this.instance_619.parent = this;
	this.instance_619.setTransform(700,288);

	this.instance_620 = new lib.wavelighttp40();
	this.instance_620.parent = this;
	this.instance_620.setTransform(672,288);

	this.instance_621 = new lib.wavelighttp40();
	this.instance_621.parent = this;
	this.instance_621.setTransform(644,288);

	this.instance_622 = new lib.wavelighttp40();
	this.instance_622.parent = this;
	this.instance_622.setTransform(616,288);

	this.instance_623 = new lib.wavelighttp40();
	this.instance_623.parent = this;
	this.instance_623.setTransform(588,288);

	this.instance_624 = new lib.wavelighttp40();
	this.instance_624.parent = this;
	this.instance_624.setTransform(560,288);

	this.instance_625 = new lib.wavelighttp40();
	this.instance_625.parent = this;
	this.instance_625.setTransform(532,288);

	this.instance_626 = new lib.wavelighttp40();
	this.instance_626.parent = this;
	this.instance_626.setTransform(504,288);

	this.instance_627 = new lib.wavelighttp40();
	this.instance_627.parent = this;
	this.instance_627.setTransform(476,288);

	this.instance_628 = new lib.wavelighttp40();
	this.instance_628.parent = this;
	this.instance_628.setTransform(448,288);

	this.instance_629 = new lib.wavelighttp40();
	this.instance_629.parent = this;
	this.instance_629.setTransform(420,288);

	this.instance_630 = new lib.wavelighttp40();
	this.instance_630.parent = this;
	this.instance_630.setTransform(392,288);

	this.instance_631 = new lib.wavelighttp40();
	this.instance_631.parent = this;
	this.instance_631.setTransform(364,288);

	this.instance_632 = new lib.wavelighttp40();
	this.instance_632.parent = this;
	this.instance_632.setTransform(336,288);

	this.instance_633 = new lib.wavelighttp40();
	this.instance_633.parent = this;
	this.instance_633.setTransform(308,288);

	this.instance_634 = new lib.wavelighttp40();
	this.instance_634.parent = this;
	this.instance_634.setTransform(280,288);

	this.instance_635 = new lib.wavelighttp40();
	this.instance_635.parent = this;
	this.instance_635.setTransform(252,288);

	this.instance_636 = new lib.wavelighttp40();
	this.instance_636.parent = this;
	this.instance_636.setTransform(224,288);

	this.instance_637 = new lib.wavelighttp40();
	this.instance_637.parent = this;
	this.instance_637.setTransform(196,288);

	this.instance_638 = new lib.wavelighttp40();
	this.instance_638.parent = this;
	this.instance_638.setTransform(168,288);

	this.instance_639 = new lib.wavelighttp40();
	this.instance_639.parent = this;
	this.instance_639.setTransform(140,288);

	this.instance_640 = new lib.wavelighttp40();
	this.instance_640.parent = this;
	this.instance_640.setTransform(112,288);

	this.instance_641 = new lib.wavelighttp40();
	this.instance_641.parent = this;
	this.instance_641.setTransform(84,288);

	this.instance_642 = new lib.wavelighttp40();
	this.instance_642.parent = this;
	this.instance_642.setTransform(56,288);

	this.instance_643 = new lib.wavelighttp40();
	this.instance_643.parent = this;
	this.instance_643.setTransform(28,288);

	this.instance_644 = new lib.wavelighttp40();
	this.instance_644.parent = this;
	this.instance_644.setTransform(0,288);

	this.instance_645 = new lib.wavelighttp40();
	this.instance_645.parent = this;
	this.instance_645.setTransform(1176,264);

	this.instance_646 = new lib.wavelighttp40();
	this.instance_646.parent = this;
	this.instance_646.setTransform(1148,264);

	this.instance_647 = new lib.wavelighttp40();
	this.instance_647.parent = this;
	this.instance_647.setTransform(1120,264);

	this.instance_648 = new lib.wavelighttp40();
	this.instance_648.parent = this;
	this.instance_648.setTransform(1092,264);

	this.instance_649 = new lib.wavelighttp40();
	this.instance_649.parent = this;
	this.instance_649.setTransform(1064,264);

	this.instance_650 = new lib.wavelighttp40();
	this.instance_650.parent = this;
	this.instance_650.setTransform(1036,264);

	this.instance_651 = new lib.wavelighttp40();
	this.instance_651.parent = this;
	this.instance_651.setTransform(1008,264);

	this.instance_652 = new lib.wavelighttp40();
	this.instance_652.parent = this;
	this.instance_652.setTransform(980,264);

	this.instance_653 = new lib.wavelighttp40();
	this.instance_653.parent = this;
	this.instance_653.setTransform(952,264);

	this.instance_654 = new lib.wavelighttp40();
	this.instance_654.parent = this;
	this.instance_654.setTransform(924,264);

	this.instance_655 = new lib.wavelighttp40();
	this.instance_655.parent = this;
	this.instance_655.setTransform(896,264);

	this.instance_656 = new lib.wavelighttp40();
	this.instance_656.parent = this;
	this.instance_656.setTransform(868,264);

	this.instance_657 = new lib.wavelighttp40();
	this.instance_657.parent = this;
	this.instance_657.setTransform(840,264);

	this.instance_658 = new lib.wavelighttp40();
	this.instance_658.parent = this;
	this.instance_658.setTransform(812,264);

	this.instance_659 = new lib.wavelighttp40();
	this.instance_659.parent = this;
	this.instance_659.setTransform(784,264);

	this.instance_660 = new lib.wavelighttp40();
	this.instance_660.parent = this;
	this.instance_660.setTransform(756,264);

	this.instance_661 = new lib.wavelighttp40();
	this.instance_661.parent = this;
	this.instance_661.setTransform(728,264);

	this.instance_662 = new lib.wavelighttp40();
	this.instance_662.parent = this;
	this.instance_662.setTransform(700,264);

	this.instance_663 = new lib.wavelighttp40();
	this.instance_663.parent = this;
	this.instance_663.setTransform(672,264);

	this.instance_664 = new lib.wavelighttp40();
	this.instance_664.parent = this;
	this.instance_664.setTransform(644,264);

	this.instance_665 = new lib.wavelighttp40();
	this.instance_665.parent = this;
	this.instance_665.setTransform(616,264);

	this.instance_666 = new lib.wavelighttp40();
	this.instance_666.parent = this;
	this.instance_666.setTransform(588,264);

	this.instance_667 = new lib.wavelighttp40();
	this.instance_667.parent = this;
	this.instance_667.setTransform(560,264);

	this.instance_668 = new lib.wavelighttp40();
	this.instance_668.parent = this;
	this.instance_668.setTransform(532,264);

	this.instance_669 = new lib.wavelighttp40();
	this.instance_669.parent = this;
	this.instance_669.setTransform(504,264);

	this.instance_670 = new lib.wavelighttp40();
	this.instance_670.parent = this;
	this.instance_670.setTransform(476,264);

	this.instance_671 = new lib.wavelighttp40();
	this.instance_671.parent = this;
	this.instance_671.setTransform(448,264);

	this.instance_672 = new lib.wavelighttp40();
	this.instance_672.parent = this;
	this.instance_672.setTransform(420,264);

	this.instance_673 = new lib.wavelighttp40();
	this.instance_673.parent = this;
	this.instance_673.setTransform(392,264);

	this.instance_674 = new lib.wavelighttp40();
	this.instance_674.parent = this;
	this.instance_674.setTransform(364,264);

	this.instance_675 = new lib.wavelighttp40();
	this.instance_675.parent = this;
	this.instance_675.setTransform(336,264);

	this.instance_676 = new lib.wavelighttp40();
	this.instance_676.parent = this;
	this.instance_676.setTransform(308,264);

	this.instance_677 = new lib.wavelighttp40();
	this.instance_677.parent = this;
	this.instance_677.setTransform(280,264);

	this.instance_678 = new lib.wavelighttp40();
	this.instance_678.parent = this;
	this.instance_678.setTransform(252,264);

	this.instance_679 = new lib.wavelighttp40();
	this.instance_679.parent = this;
	this.instance_679.setTransform(224,264);

	this.instance_680 = new lib.wavelighttp40();
	this.instance_680.parent = this;
	this.instance_680.setTransform(196,264);

	this.instance_681 = new lib.wavelighttp40();
	this.instance_681.parent = this;
	this.instance_681.setTransform(168,264);

	this.instance_682 = new lib.wavelighttp40();
	this.instance_682.parent = this;
	this.instance_682.setTransform(140,264);

	this.instance_683 = new lib.wavelighttp40();
	this.instance_683.parent = this;
	this.instance_683.setTransform(112,264);

	this.instance_684 = new lib.wavelighttp40();
	this.instance_684.parent = this;
	this.instance_684.setTransform(84,264);

	this.instance_685 = new lib.wavelighttp40();
	this.instance_685.parent = this;
	this.instance_685.setTransform(56,264);

	this.instance_686 = new lib.wavelighttp40();
	this.instance_686.parent = this;
	this.instance_686.setTransform(28,264);

	this.instance_687 = new lib.wavelighttp40();
	this.instance_687.parent = this;
	this.instance_687.setTransform(0,264);

	this.instance_688 = new lib.wavelighttp40();
	this.instance_688.parent = this;
	this.instance_688.setTransform(1176,240);

	this.instance_689 = new lib.wavelighttp40();
	this.instance_689.parent = this;
	this.instance_689.setTransform(1148,240);

	this.instance_690 = new lib.wavelighttp40();
	this.instance_690.parent = this;
	this.instance_690.setTransform(1120,240);

	this.instance_691 = new lib.wavelighttp40();
	this.instance_691.parent = this;
	this.instance_691.setTransform(1092,240);

	this.instance_692 = new lib.wavelighttp40();
	this.instance_692.parent = this;
	this.instance_692.setTransform(1064,240);

	this.instance_693 = new lib.wavelighttp40();
	this.instance_693.parent = this;
	this.instance_693.setTransform(1036,240);

	this.instance_694 = new lib.wavelighttp40();
	this.instance_694.parent = this;
	this.instance_694.setTransform(1008,240);

	this.instance_695 = new lib.wavelighttp40();
	this.instance_695.parent = this;
	this.instance_695.setTransform(980,240);

	this.instance_696 = new lib.wavelighttp40();
	this.instance_696.parent = this;
	this.instance_696.setTransform(952,240);

	this.instance_697 = new lib.wavelighttp40();
	this.instance_697.parent = this;
	this.instance_697.setTransform(924,240);

	this.instance_698 = new lib.wavelighttp40();
	this.instance_698.parent = this;
	this.instance_698.setTransform(896,240);

	this.instance_699 = new lib.wavelighttp40();
	this.instance_699.parent = this;
	this.instance_699.setTransform(868,240);

	this.instance_700 = new lib.wavelighttp40();
	this.instance_700.parent = this;
	this.instance_700.setTransform(840,240);

	this.instance_701 = new lib.wavelighttp40();
	this.instance_701.parent = this;
	this.instance_701.setTransform(812,240);

	this.instance_702 = new lib.wavelighttp40();
	this.instance_702.parent = this;
	this.instance_702.setTransform(784,240);

	this.instance_703 = new lib.wavelighttp40();
	this.instance_703.parent = this;
	this.instance_703.setTransform(756,240);

	this.instance_704 = new lib.wavelighttp40();
	this.instance_704.parent = this;
	this.instance_704.setTransform(728,240);

	this.instance_705 = new lib.wavelighttp40();
	this.instance_705.parent = this;
	this.instance_705.setTransform(700,240);

	this.instance_706 = new lib.wavelighttp40();
	this.instance_706.parent = this;
	this.instance_706.setTransform(672,240);

	this.instance_707 = new lib.wavelighttp40();
	this.instance_707.parent = this;
	this.instance_707.setTransform(644,240);

	this.instance_708 = new lib.wavelighttp40();
	this.instance_708.parent = this;
	this.instance_708.setTransform(616,240);

	this.instance_709 = new lib.wavelighttp40();
	this.instance_709.parent = this;
	this.instance_709.setTransform(588,240);

	this.instance_710 = new lib.wavelighttp40();
	this.instance_710.parent = this;
	this.instance_710.setTransform(560,240);

	this.instance_711 = new lib.wavelighttp40();
	this.instance_711.parent = this;
	this.instance_711.setTransform(532,240);

	this.instance_712 = new lib.wavelighttp40();
	this.instance_712.parent = this;
	this.instance_712.setTransform(504,240);

	this.instance_713 = new lib.wavelighttp40();
	this.instance_713.parent = this;
	this.instance_713.setTransform(476,240);

	this.instance_714 = new lib.wavelighttp40();
	this.instance_714.parent = this;
	this.instance_714.setTransform(448,240);

	this.instance_715 = new lib.wavelighttp40();
	this.instance_715.parent = this;
	this.instance_715.setTransform(420,240);

	this.instance_716 = new lib.wavelighttp40();
	this.instance_716.parent = this;
	this.instance_716.setTransform(392,240);

	this.instance_717 = new lib.wavelighttp40();
	this.instance_717.parent = this;
	this.instance_717.setTransform(364,240);

	this.instance_718 = new lib.wavelighttp40();
	this.instance_718.parent = this;
	this.instance_718.setTransform(336,240);

	this.instance_719 = new lib.wavelighttp40();
	this.instance_719.parent = this;
	this.instance_719.setTransform(308,240);

	this.instance_720 = new lib.wavelighttp40();
	this.instance_720.parent = this;
	this.instance_720.setTransform(280,240);

	this.instance_721 = new lib.wavelighttp40();
	this.instance_721.parent = this;
	this.instance_721.setTransform(252,240);

	this.instance_722 = new lib.wavelighttp40();
	this.instance_722.parent = this;
	this.instance_722.setTransform(224,240);

	this.instance_723 = new lib.wavelighttp40();
	this.instance_723.parent = this;
	this.instance_723.setTransform(196,240);

	this.instance_724 = new lib.wavelighttp40();
	this.instance_724.parent = this;
	this.instance_724.setTransform(168,240);

	this.instance_725 = new lib.wavelighttp40();
	this.instance_725.parent = this;
	this.instance_725.setTransform(140,240);

	this.instance_726 = new lib.wavelighttp40();
	this.instance_726.parent = this;
	this.instance_726.setTransform(112,240);

	this.instance_727 = new lib.wavelighttp40();
	this.instance_727.parent = this;
	this.instance_727.setTransform(84,240);

	this.instance_728 = new lib.wavelighttp40();
	this.instance_728.parent = this;
	this.instance_728.setTransform(56,240);

	this.instance_729 = new lib.wavelighttp40();
	this.instance_729.parent = this;
	this.instance_729.setTransform(28,240);

	this.instance_730 = new lib.wavelighttp40();
	this.instance_730.parent = this;
	this.instance_730.setTransform(0,240);

	this.instance_731 = new lib.wavelighttp40();
	this.instance_731.parent = this;
	this.instance_731.setTransform(1176,216);

	this.instance_732 = new lib.wavelighttp40();
	this.instance_732.parent = this;
	this.instance_732.setTransform(1148,216);

	this.instance_733 = new lib.wavelighttp40();
	this.instance_733.parent = this;
	this.instance_733.setTransform(1120,216);

	this.instance_734 = new lib.wavelighttp40();
	this.instance_734.parent = this;
	this.instance_734.setTransform(1092,216);

	this.instance_735 = new lib.wavelighttp40();
	this.instance_735.parent = this;
	this.instance_735.setTransform(1064,216);

	this.instance_736 = new lib.wavelighttp40();
	this.instance_736.parent = this;
	this.instance_736.setTransform(1036,216);

	this.instance_737 = new lib.wavelighttp40();
	this.instance_737.parent = this;
	this.instance_737.setTransform(1008,216);

	this.instance_738 = new lib.wavelighttp40();
	this.instance_738.parent = this;
	this.instance_738.setTransform(980,216);

	this.instance_739 = new lib.wavelighttp40();
	this.instance_739.parent = this;
	this.instance_739.setTransform(952,216);

	this.instance_740 = new lib.wavelighttp40();
	this.instance_740.parent = this;
	this.instance_740.setTransform(924,216);

	this.instance_741 = new lib.wavelighttp40();
	this.instance_741.parent = this;
	this.instance_741.setTransform(896,216);

	this.instance_742 = new lib.wavelighttp40();
	this.instance_742.parent = this;
	this.instance_742.setTransform(868,216);

	this.instance_743 = new lib.wavelighttp40();
	this.instance_743.parent = this;
	this.instance_743.setTransform(840,216);

	this.instance_744 = new lib.wavelighttp40();
	this.instance_744.parent = this;
	this.instance_744.setTransform(812,216);

	this.instance_745 = new lib.wavelighttp40();
	this.instance_745.parent = this;
	this.instance_745.setTransform(784,216);

	this.instance_746 = new lib.wavelighttp40();
	this.instance_746.parent = this;
	this.instance_746.setTransform(756,216);

	this.instance_747 = new lib.wavelighttp40();
	this.instance_747.parent = this;
	this.instance_747.setTransform(728,216);

	this.instance_748 = new lib.wavelighttp40();
	this.instance_748.parent = this;
	this.instance_748.setTransform(700,216);

	this.instance_749 = new lib.wavelighttp40();
	this.instance_749.parent = this;
	this.instance_749.setTransform(672,216);

	this.instance_750 = new lib.wavelighttp40();
	this.instance_750.parent = this;
	this.instance_750.setTransform(644,216);

	this.instance_751 = new lib.wavelighttp40();
	this.instance_751.parent = this;
	this.instance_751.setTransform(616,216);

	this.instance_752 = new lib.wavelighttp40();
	this.instance_752.parent = this;
	this.instance_752.setTransform(588,216);

	this.instance_753 = new lib.wavelighttp40();
	this.instance_753.parent = this;
	this.instance_753.setTransform(560,216);

	this.instance_754 = new lib.wavelighttp40();
	this.instance_754.parent = this;
	this.instance_754.setTransform(532,216);

	this.instance_755 = new lib.wavelighttp40();
	this.instance_755.parent = this;
	this.instance_755.setTransform(504,216);

	this.instance_756 = new lib.wavelighttp40();
	this.instance_756.parent = this;
	this.instance_756.setTransform(476,216);

	this.instance_757 = new lib.wavelighttp40();
	this.instance_757.parent = this;
	this.instance_757.setTransform(448,216);

	this.instance_758 = new lib.wavelighttp40();
	this.instance_758.parent = this;
	this.instance_758.setTransform(420,216);

	this.instance_759 = new lib.wavelighttp40();
	this.instance_759.parent = this;
	this.instance_759.setTransform(392,216);

	this.instance_760 = new lib.wavelighttp40();
	this.instance_760.parent = this;
	this.instance_760.setTransform(364,216);

	this.instance_761 = new lib.wavelighttp40();
	this.instance_761.parent = this;
	this.instance_761.setTransform(336,216);

	this.instance_762 = new lib.wavelighttp40();
	this.instance_762.parent = this;
	this.instance_762.setTransform(308,216);

	this.instance_763 = new lib.wavelighttp40();
	this.instance_763.parent = this;
	this.instance_763.setTransform(280,216);

	this.instance_764 = new lib.wavelighttp40();
	this.instance_764.parent = this;
	this.instance_764.setTransform(252,216);

	this.instance_765 = new lib.wavelighttp40();
	this.instance_765.parent = this;
	this.instance_765.setTransform(224,216);

	this.instance_766 = new lib.wavelighttp40();
	this.instance_766.parent = this;
	this.instance_766.setTransform(196,216);

	this.instance_767 = new lib.wavelighttp40();
	this.instance_767.parent = this;
	this.instance_767.setTransform(168,216);

	this.instance_768 = new lib.wavelighttp40();
	this.instance_768.parent = this;
	this.instance_768.setTransform(140,216);

	this.instance_769 = new lib.wavelighttp40();
	this.instance_769.parent = this;
	this.instance_769.setTransform(112,216);

	this.instance_770 = new lib.wavelighttp40();
	this.instance_770.parent = this;
	this.instance_770.setTransform(84,216);

	this.instance_771 = new lib.wavelighttp40();
	this.instance_771.parent = this;
	this.instance_771.setTransform(56,216);

	this.instance_772 = new lib.wavelighttp40();
	this.instance_772.parent = this;
	this.instance_772.setTransform(28,216);

	this.instance_773 = new lib.wavelighttp40();
	this.instance_773.parent = this;
	this.instance_773.setTransform(0,216);

	this.instance_774 = new lib.wavelighttp40();
	this.instance_774.parent = this;
	this.instance_774.setTransform(1176,192);

	this.instance_775 = new lib.wavelighttp40();
	this.instance_775.parent = this;
	this.instance_775.setTransform(1148,192);

	this.instance_776 = new lib.wavelighttp40();
	this.instance_776.parent = this;
	this.instance_776.setTransform(1120,192);

	this.instance_777 = new lib.wavelighttp40();
	this.instance_777.parent = this;
	this.instance_777.setTransform(1092,192);

	this.instance_778 = new lib.wavelighttp40();
	this.instance_778.parent = this;
	this.instance_778.setTransform(1064,192);

	this.instance_779 = new lib.wavelighttp40();
	this.instance_779.parent = this;
	this.instance_779.setTransform(1036,192);

	this.instance_780 = new lib.wavelighttp40();
	this.instance_780.parent = this;
	this.instance_780.setTransform(1008,192);

	this.instance_781 = new lib.wavelighttp40();
	this.instance_781.parent = this;
	this.instance_781.setTransform(980,192);

	this.instance_782 = new lib.wavelighttp40();
	this.instance_782.parent = this;
	this.instance_782.setTransform(952,192);

	this.instance_783 = new lib.wavelighttp40();
	this.instance_783.parent = this;
	this.instance_783.setTransform(924,192);

	this.instance_784 = new lib.wavelighttp40();
	this.instance_784.parent = this;
	this.instance_784.setTransform(896,192);

	this.instance_785 = new lib.wavelighttp40();
	this.instance_785.parent = this;
	this.instance_785.setTransform(868,192);

	this.instance_786 = new lib.wavelighttp40();
	this.instance_786.parent = this;
	this.instance_786.setTransform(840,192);

	this.instance_787 = new lib.wavelighttp40();
	this.instance_787.parent = this;
	this.instance_787.setTransform(812,192);

	this.instance_788 = new lib.wavelighttp40();
	this.instance_788.parent = this;
	this.instance_788.setTransform(784,192);

	this.instance_789 = new lib.wavelighttp40();
	this.instance_789.parent = this;
	this.instance_789.setTransform(756,192);

	this.instance_790 = new lib.wavelighttp40();
	this.instance_790.parent = this;
	this.instance_790.setTransform(728,192);

	this.instance_791 = new lib.wavelighttp40();
	this.instance_791.parent = this;
	this.instance_791.setTransform(700,192);

	this.instance_792 = new lib.wavelighttp40();
	this.instance_792.parent = this;
	this.instance_792.setTransform(672,192);

	this.instance_793 = new lib.wavelighttp40();
	this.instance_793.parent = this;
	this.instance_793.setTransform(644,192);

	this.instance_794 = new lib.wavelighttp40();
	this.instance_794.parent = this;
	this.instance_794.setTransform(616,192);

	this.instance_795 = new lib.wavelighttp40();
	this.instance_795.parent = this;
	this.instance_795.setTransform(588,192);

	this.instance_796 = new lib.wavelighttp40();
	this.instance_796.parent = this;
	this.instance_796.setTransform(560,192);

	this.instance_797 = new lib.wavelighttp40();
	this.instance_797.parent = this;
	this.instance_797.setTransform(532,192);

	this.instance_798 = new lib.wavelighttp40();
	this.instance_798.parent = this;
	this.instance_798.setTransform(504,192);

	this.instance_799 = new lib.wavelighttp40();
	this.instance_799.parent = this;
	this.instance_799.setTransform(476,192);

	this.instance_800 = new lib.wavelighttp40();
	this.instance_800.parent = this;
	this.instance_800.setTransform(448,192);

	this.instance_801 = new lib.wavelighttp40();
	this.instance_801.parent = this;
	this.instance_801.setTransform(420,192);

	this.instance_802 = new lib.wavelighttp40();
	this.instance_802.parent = this;
	this.instance_802.setTransform(392,192);

	this.instance_803 = new lib.wavelighttp40();
	this.instance_803.parent = this;
	this.instance_803.setTransform(364,192);

	this.instance_804 = new lib.wavelighttp40();
	this.instance_804.parent = this;
	this.instance_804.setTransform(336,192);

	this.instance_805 = new lib.wavelighttp40();
	this.instance_805.parent = this;
	this.instance_805.setTransform(308,192);

	this.instance_806 = new lib.wavelighttp40();
	this.instance_806.parent = this;
	this.instance_806.setTransform(280,192);

	this.instance_807 = new lib.wavelighttp40();
	this.instance_807.parent = this;
	this.instance_807.setTransform(252,192);

	this.instance_808 = new lib.wavelighttp40();
	this.instance_808.parent = this;
	this.instance_808.setTransform(224,192);

	this.instance_809 = new lib.wavelighttp40();
	this.instance_809.parent = this;
	this.instance_809.setTransform(196,192);

	this.instance_810 = new lib.wavelighttp40();
	this.instance_810.parent = this;
	this.instance_810.setTransform(168,192);

	this.instance_811 = new lib.wavelighttp40();
	this.instance_811.parent = this;
	this.instance_811.setTransform(140,192);

	this.instance_812 = new lib.wavelighttp40();
	this.instance_812.parent = this;
	this.instance_812.setTransform(112,192);

	this.instance_813 = new lib.wavelighttp40();
	this.instance_813.parent = this;
	this.instance_813.setTransform(84,192);

	this.instance_814 = new lib.wavelighttp40();
	this.instance_814.parent = this;
	this.instance_814.setTransform(56,192);

	this.instance_815 = new lib.wavelighttp40();
	this.instance_815.parent = this;
	this.instance_815.setTransform(28,192);

	this.instance_816 = new lib.wavelighttp40();
	this.instance_816.parent = this;
	this.instance_816.setTransform(0,192);

	this.instance_817 = new lib.wavelighttp40();
	this.instance_817.parent = this;
	this.instance_817.setTransform(1176,168);

	this.instance_818 = new lib.wavelighttp40();
	this.instance_818.parent = this;
	this.instance_818.setTransform(1148,168);

	this.instance_819 = new lib.wavelighttp40();
	this.instance_819.parent = this;
	this.instance_819.setTransform(1120,168);

	this.instance_820 = new lib.wavelighttp40();
	this.instance_820.parent = this;
	this.instance_820.setTransform(1092,168);

	this.instance_821 = new lib.wavelighttp40();
	this.instance_821.parent = this;
	this.instance_821.setTransform(1064,168);

	this.instance_822 = new lib.wavelighttp40();
	this.instance_822.parent = this;
	this.instance_822.setTransform(1036,168);

	this.instance_823 = new lib.wavelighttp40();
	this.instance_823.parent = this;
	this.instance_823.setTransform(1008,168);

	this.instance_824 = new lib.wavelighttp40();
	this.instance_824.parent = this;
	this.instance_824.setTransform(980,168);

	this.instance_825 = new lib.wavelighttp40();
	this.instance_825.parent = this;
	this.instance_825.setTransform(952,168);

	this.instance_826 = new lib.wavelighttp40();
	this.instance_826.parent = this;
	this.instance_826.setTransform(924,168);

	this.instance_827 = new lib.wavelighttp40();
	this.instance_827.parent = this;
	this.instance_827.setTransform(896,168);

	this.instance_828 = new lib.wavelighttp40();
	this.instance_828.parent = this;
	this.instance_828.setTransform(868,168);

	this.instance_829 = new lib.wavelighttp40();
	this.instance_829.parent = this;
	this.instance_829.setTransform(840,168);

	this.instance_830 = new lib.wavelighttp40();
	this.instance_830.parent = this;
	this.instance_830.setTransform(812,168);

	this.instance_831 = new lib.wavelighttp40();
	this.instance_831.parent = this;
	this.instance_831.setTransform(784,168);

	this.instance_832 = new lib.wavelighttp40();
	this.instance_832.parent = this;
	this.instance_832.setTransform(756,168);

	this.instance_833 = new lib.wavelighttp40();
	this.instance_833.parent = this;
	this.instance_833.setTransform(728,168);

	this.instance_834 = new lib.wavelighttp40();
	this.instance_834.parent = this;
	this.instance_834.setTransform(700,168);

	this.instance_835 = new lib.wavelighttp40();
	this.instance_835.parent = this;
	this.instance_835.setTransform(672,168);

	this.instance_836 = new lib.wavelighttp40();
	this.instance_836.parent = this;
	this.instance_836.setTransform(644,168);

	this.instance_837 = new lib.wavelighttp40();
	this.instance_837.parent = this;
	this.instance_837.setTransform(616,168);

	this.instance_838 = new lib.wavelighttp40();
	this.instance_838.parent = this;
	this.instance_838.setTransform(588,168);

	this.instance_839 = new lib.wavelighttp40();
	this.instance_839.parent = this;
	this.instance_839.setTransform(560,168);

	this.instance_840 = new lib.wavelighttp40();
	this.instance_840.parent = this;
	this.instance_840.setTransform(532,168);

	this.instance_841 = new lib.wavelighttp40();
	this.instance_841.parent = this;
	this.instance_841.setTransform(504,168);

	this.instance_842 = new lib.wavelighttp40();
	this.instance_842.parent = this;
	this.instance_842.setTransform(476,168);

	this.instance_843 = new lib.wavelighttp40();
	this.instance_843.parent = this;
	this.instance_843.setTransform(448,168);

	this.instance_844 = new lib.wavelighttp40();
	this.instance_844.parent = this;
	this.instance_844.setTransform(420,168);

	this.instance_845 = new lib.wavelighttp40();
	this.instance_845.parent = this;
	this.instance_845.setTransform(392,168);

	this.instance_846 = new lib.wavelighttp40();
	this.instance_846.parent = this;
	this.instance_846.setTransform(364,168);

	this.instance_847 = new lib.wavelighttp40();
	this.instance_847.parent = this;
	this.instance_847.setTransform(336,168);

	this.instance_848 = new lib.wavelighttp40();
	this.instance_848.parent = this;
	this.instance_848.setTransform(308,168);

	this.instance_849 = new lib.wavelighttp40();
	this.instance_849.parent = this;
	this.instance_849.setTransform(280,168);

	this.instance_850 = new lib.wavelighttp40();
	this.instance_850.parent = this;
	this.instance_850.setTransform(252,168);

	this.instance_851 = new lib.wavelighttp40();
	this.instance_851.parent = this;
	this.instance_851.setTransform(224,168);

	this.instance_852 = new lib.wavelighttp40();
	this.instance_852.parent = this;
	this.instance_852.setTransform(196,168);

	this.instance_853 = new lib.wavelighttp40();
	this.instance_853.parent = this;
	this.instance_853.setTransform(168,168);

	this.instance_854 = new lib.wavelighttp40();
	this.instance_854.parent = this;
	this.instance_854.setTransform(140,168);

	this.instance_855 = new lib.wavelighttp40();
	this.instance_855.parent = this;
	this.instance_855.setTransform(112,168);

	this.instance_856 = new lib.wavelighttp40();
	this.instance_856.parent = this;
	this.instance_856.setTransform(84,168);

	this.instance_857 = new lib.wavelighttp40();
	this.instance_857.parent = this;
	this.instance_857.setTransform(56,168);

	this.instance_858 = new lib.wavelighttp40();
	this.instance_858.parent = this;
	this.instance_858.setTransform(28,168);

	this.instance_859 = new lib.wavelighttp40();
	this.instance_859.parent = this;
	this.instance_859.setTransform(0,168);

	this.instance_860 = new lib.wavelighttp40();
	this.instance_860.parent = this;
	this.instance_860.setTransform(1176,144);

	this.instance_861 = new lib.wavelighttp40();
	this.instance_861.parent = this;
	this.instance_861.setTransform(1148,144);

	this.instance_862 = new lib.wavelighttp40();
	this.instance_862.parent = this;
	this.instance_862.setTransform(1120,144);

	this.instance_863 = new lib.wavelighttp40();
	this.instance_863.parent = this;
	this.instance_863.setTransform(1092,144);

	this.instance_864 = new lib.wavelighttp40();
	this.instance_864.parent = this;
	this.instance_864.setTransform(1064,144);

	this.instance_865 = new lib.wavelighttp40();
	this.instance_865.parent = this;
	this.instance_865.setTransform(1036,144);

	this.instance_866 = new lib.wavelighttp40();
	this.instance_866.parent = this;
	this.instance_866.setTransform(1008,144);

	this.instance_867 = new lib.wavelighttp40();
	this.instance_867.parent = this;
	this.instance_867.setTransform(980,144);

	this.instance_868 = new lib.wavelighttp40();
	this.instance_868.parent = this;
	this.instance_868.setTransform(952,144);

	this.instance_869 = new lib.wavelighttp40();
	this.instance_869.parent = this;
	this.instance_869.setTransform(924,144);

	this.instance_870 = new lib.wavelighttp40();
	this.instance_870.parent = this;
	this.instance_870.setTransform(896,144);

	this.instance_871 = new lib.wavelighttp40();
	this.instance_871.parent = this;
	this.instance_871.setTransform(868,144);

	this.instance_872 = new lib.wavelighttp40();
	this.instance_872.parent = this;
	this.instance_872.setTransform(840,144);

	this.instance_873 = new lib.wavelighttp40();
	this.instance_873.parent = this;
	this.instance_873.setTransform(812,144);

	this.instance_874 = new lib.wavelighttp40();
	this.instance_874.parent = this;
	this.instance_874.setTransform(784,144);

	this.instance_875 = new lib.wavelighttp40();
	this.instance_875.parent = this;
	this.instance_875.setTransform(756,144);

	this.instance_876 = new lib.wavelighttp40();
	this.instance_876.parent = this;
	this.instance_876.setTransform(728,144);

	this.instance_877 = new lib.wavelighttp40();
	this.instance_877.parent = this;
	this.instance_877.setTransform(700,144);

	this.instance_878 = new lib.wavelighttp40();
	this.instance_878.parent = this;
	this.instance_878.setTransform(672,144);

	this.instance_879 = new lib.wavelighttp40();
	this.instance_879.parent = this;
	this.instance_879.setTransform(644,144);

	this.instance_880 = new lib.wavelighttp40();
	this.instance_880.parent = this;
	this.instance_880.setTransform(616,144);

	this.instance_881 = new lib.wavelighttp40();
	this.instance_881.parent = this;
	this.instance_881.setTransform(588,144);

	this.instance_882 = new lib.wavelighttp40();
	this.instance_882.parent = this;
	this.instance_882.setTransform(560,144);

	this.instance_883 = new lib.wavelighttp40();
	this.instance_883.parent = this;
	this.instance_883.setTransform(532,144);

	this.instance_884 = new lib.wavelighttp40();
	this.instance_884.parent = this;
	this.instance_884.setTransform(504,144);

	this.instance_885 = new lib.wavelighttp40();
	this.instance_885.parent = this;
	this.instance_885.setTransform(476,144);

	this.instance_886 = new lib.wavelighttp40();
	this.instance_886.parent = this;
	this.instance_886.setTransform(448,144);

	this.instance_887 = new lib.wavelighttp40();
	this.instance_887.parent = this;
	this.instance_887.setTransform(420,144);

	this.instance_888 = new lib.wavelighttp40();
	this.instance_888.parent = this;
	this.instance_888.setTransform(392,144);

	this.instance_889 = new lib.wavelighttp40();
	this.instance_889.parent = this;
	this.instance_889.setTransform(364,144);

	this.instance_890 = new lib.wavelighttp40();
	this.instance_890.parent = this;
	this.instance_890.setTransform(336,144);

	this.instance_891 = new lib.wavelighttp40();
	this.instance_891.parent = this;
	this.instance_891.setTransform(308,144);

	this.instance_892 = new lib.wavelighttp40();
	this.instance_892.parent = this;
	this.instance_892.setTransform(280,144);

	this.instance_893 = new lib.wavelighttp40();
	this.instance_893.parent = this;
	this.instance_893.setTransform(252,144);

	this.instance_894 = new lib.wavelighttp40();
	this.instance_894.parent = this;
	this.instance_894.setTransform(224,144);

	this.instance_895 = new lib.wavelighttp40();
	this.instance_895.parent = this;
	this.instance_895.setTransform(196,144);

	this.instance_896 = new lib.wavelighttp40();
	this.instance_896.parent = this;
	this.instance_896.setTransform(168,144);

	this.instance_897 = new lib.wavelighttp40();
	this.instance_897.parent = this;
	this.instance_897.setTransform(140,144);

	this.instance_898 = new lib.wavelighttp40();
	this.instance_898.parent = this;
	this.instance_898.setTransform(112,144);

	this.instance_899 = new lib.wavelighttp40();
	this.instance_899.parent = this;
	this.instance_899.setTransform(84,144);

	this.instance_900 = new lib.wavelighttp40();
	this.instance_900.parent = this;
	this.instance_900.setTransform(56,144);

	this.instance_901 = new lib.wavelighttp40();
	this.instance_901.parent = this;
	this.instance_901.setTransform(28,144);

	this.instance_902 = new lib.wavelighttp40();
	this.instance_902.parent = this;
	this.instance_902.setTransform(0,144);

	this.instance_903 = new lib.wavelighttp40();
	this.instance_903.parent = this;
	this.instance_903.setTransform(1176,120);

	this.instance_904 = new lib.wavelighttp40();
	this.instance_904.parent = this;
	this.instance_904.setTransform(1148,120);

	this.instance_905 = new lib.wavelighttp40();
	this.instance_905.parent = this;
	this.instance_905.setTransform(1120,120);

	this.instance_906 = new lib.wavelighttp40();
	this.instance_906.parent = this;
	this.instance_906.setTransform(1092,120);

	this.instance_907 = new lib.wavelighttp40();
	this.instance_907.parent = this;
	this.instance_907.setTransform(1064,120);

	this.instance_908 = new lib.wavelighttp40();
	this.instance_908.parent = this;
	this.instance_908.setTransform(1036,120);

	this.instance_909 = new lib.wavelighttp40();
	this.instance_909.parent = this;
	this.instance_909.setTransform(1008,120);

	this.instance_910 = new lib.wavelighttp40();
	this.instance_910.parent = this;
	this.instance_910.setTransform(980,120);

	this.instance_911 = new lib.wavelighttp40();
	this.instance_911.parent = this;
	this.instance_911.setTransform(952,120);

	this.instance_912 = new lib.wavelighttp40();
	this.instance_912.parent = this;
	this.instance_912.setTransform(924,120);

	this.instance_913 = new lib.wavelighttp40();
	this.instance_913.parent = this;
	this.instance_913.setTransform(896,120);

	this.instance_914 = new lib.wavelighttp40();
	this.instance_914.parent = this;
	this.instance_914.setTransform(868,120);

	this.instance_915 = new lib.wavelighttp40();
	this.instance_915.parent = this;
	this.instance_915.setTransform(840,120);

	this.instance_916 = new lib.wavelighttp40();
	this.instance_916.parent = this;
	this.instance_916.setTransform(812,120);

	this.instance_917 = new lib.wavelighttp40();
	this.instance_917.parent = this;
	this.instance_917.setTransform(784,120);

	this.instance_918 = new lib.wavelighttp40();
	this.instance_918.parent = this;
	this.instance_918.setTransform(756,120);

	this.instance_919 = new lib.wavelighttp40();
	this.instance_919.parent = this;
	this.instance_919.setTransform(728,120);

	this.instance_920 = new lib.wavelighttp40();
	this.instance_920.parent = this;
	this.instance_920.setTransform(700,120);

	this.instance_921 = new lib.wavelighttp40();
	this.instance_921.parent = this;
	this.instance_921.setTransform(672,120);

	this.instance_922 = new lib.wavelighttp40();
	this.instance_922.parent = this;
	this.instance_922.setTransform(644,120);

	this.instance_923 = new lib.wavelighttp40();
	this.instance_923.parent = this;
	this.instance_923.setTransform(616,120);

	this.instance_924 = new lib.wavelighttp40();
	this.instance_924.parent = this;
	this.instance_924.setTransform(588,120);

	this.instance_925 = new lib.wavelighttp40();
	this.instance_925.parent = this;
	this.instance_925.setTransform(560,120);

	this.instance_926 = new lib.wavelighttp40();
	this.instance_926.parent = this;
	this.instance_926.setTransform(532,120);

	this.instance_927 = new lib.wavelighttp40();
	this.instance_927.parent = this;
	this.instance_927.setTransform(504,120);

	this.instance_928 = new lib.wavelighttp40();
	this.instance_928.parent = this;
	this.instance_928.setTransform(476,120);

	this.instance_929 = new lib.wavelighttp40();
	this.instance_929.parent = this;
	this.instance_929.setTransform(448,120);

	this.instance_930 = new lib.wavelighttp40();
	this.instance_930.parent = this;
	this.instance_930.setTransform(420,120);

	this.instance_931 = new lib.wavelighttp40();
	this.instance_931.parent = this;
	this.instance_931.setTransform(392,120);

	this.instance_932 = new lib.wavelighttp40();
	this.instance_932.parent = this;
	this.instance_932.setTransform(364,120);

	this.instance_933 = new lib.wavelighttp40();
	this.instance_933.parent = this;
	this.instance_933.setTransform(336,120);

	this.instance_934 = new lib.wavelighttp40();
	this.instance_934.parent = this;
	this.instance_934.setTransform(308,120);

	this.instance_935 = new lib.wavelighttp40();
	this.instance_935.parent = this;
	this.instance_935.setTransform(280,120);

	this.instance_936 = new lib.wavelighttp40();
	this.instance_936.parent = this;
	this.instance_936.setTransform(252,120);

	this.instance_937 = new lib.wavelighttp40();
	this.instance_937.parent = this;
	this.instance_937.setTransform(224,120);

	this.instance_938 = new lib.wavelighttp40();
	this.instance_938.parent = this;
	this.instance_938.setTransform(196,120);

	this.instance_939 = new lib.wavelighttp40();
	this.instance_939.parent = this;
	this.instance_939.setTransform(168,120);

	this.instance_940 = new lib.wavelighttp40();
	this.instance_940.parent = this;
	this.instance_940.setTransform(140,120);

	this.instance_941 = new lib.wavelighttp40();
	this.instance_941.parent = this;
	this.instance_941.setTransform(112,120);

	this.instance_942 = new lib.wavelighttp40();
	this.instance_942.parent = this;
	this.instance_942.setTransform(84,120);

	this.instance_943 = new lib.wavelighttp40();
	this.instance_943.parent = this;
	this.instance_943.setTransform(56,120);

	this.instance_944 = new lib.wavelighttp40();
	this.instance_944.parent = this;
	this.instance_944.setTransform(28,120);

	this.instance_945 = new lib.wavelighttp40();
	this.instance_945.parent = this;
	this.instance_945.setTransform(0,120);

	this.instance_946 = new lib.wavelighttp40();
	this.instance_946.parent = this;
	this.instance_946.setTransform(1176,96);

	this.instance_947 = new lib.wavelighttp40();
	this.instance_947.parent = this;
	this.instance_947.setTransform(1148,96);

	this.instance_948 = new lib.wavelighttp40();
	this.instance_948.parent = this;
	this.instance_948.setTransform(1120,96);

	this.instance_949 = new lib.wavelighttp40();
	this.instance_949.parent = this;
	this.instance_949.setTransform(1092,96);

	this.instance_950 = new lib.wavelighttp40();
	this.instance_950.parent = this;
	this.instance_950.setTransform(1064,96);

	this.instance_951 = new lib.wavelighttp40();
	this.instance_951.parent = this;
	this.instance_951.setTransform(1036,96);

	this.instance_952 = new lib.wavelighttp40();
	this.instance_952.parent = this;
	this.instance_952.setTransform(1008,96);

	this.instance_953 = new lib.wavelighttp40();
	this.instance_953.parent = this;
	this.instance_953.setTransform(980,96);

	this.instance_954 = new lib.wavelighttp40();
	this.instance_954.parent = this;
	this.instance_954.setTransform(952,96);

	this.instance_955 = new lib.wavelighttp40();
	this.instance_955.parent = this;
	this.instance_955.setTransform(924,96);

	this.instance_956 = new lib.wavelighttp40();
	this.instance_956.parent = this;
	this.instance_956.setTransform(896,96);

	this.instance_957 = new lib.wavelighttp40();
	this.instance_957.parent = this;
	this.instance_957.setTransform(868,96);

	this.instance_958 = new lib.wavelighttp40();
	this.instance_958.parent = this;
	this.instance_958.setTransform(840,96);

	this.instance_959 = new lib.wavelighttp40();
	this.instance_959.parent = this;
	this.instance_959.setTransform(812,96);

	this.instance_960 = new lib.wavelighttp40();
	this.instance_960.parent = this;
	this.instance_960.setTransform(784,96);

	this.instance_961 = new lib.wavelighttp40();
	this.instance_961.parent = this;
	this.instance_961.setTransform(756,96);

	this.instance_962 = new lib.wavelighttp40();
	this.instance_962.parent = this;
	this.instance_962.setTransform(728,96);

	this.instance_963 = new lib.wavelighttp40();
	this.instance_963.parent = this;
	this.instance_963.setTransform(700,96);

	this.instance_964 = new lib.wavelighttp40();
	this.instance_964.parent = this;
	this.instance_964.setTransform(672,96);

	this.instance_965 = new lib.wavelighttp40();
	this.instance_965.parent = this;
	this.instance_965.setTransform(644,96);

	this.instance_966 = new lib.wavelighttp40();
	this.instance_966.parent = this;
	this.instance_966.setTransform(616,96);

	this.instance_967 = new lib.wavelighttp40();
	this.instance_967.parent = this;
	this.instance_967.setTransform(588,96);

	this.instance_968 = new lib.wavelighttp40();
	this.instance_968.parent = this;
	this.instance_968.setTransform(560,96);

	this.instance_969 = new lib.wavelighttp40();
	this.instance_969.parent = this;
	this.instance_969.setTransform(532,96);

	this.instance_970 = new lib.wavelighttp40();
	this.instance_970.parent = this;
	this.instance_970.setTransform(504,96);

	this.instance_971 = new lib.wavelighttp40();
	this.instance_971.parent = this;
	this.instance_971.setTransform(476,96);

	this.instance_972 = new lib.wavelighttp40();
	this.instance_972.parent = this;
	this.instance_972.setTransform(448,96);

	this.instance_973 = new lib.wavelighttp40();
	this.instance_973.parent = this;
	this.instance_973.setTransform(420,96);

	this.instance_974 = new lib.wavelighttp40();
	this.instance_974.parent = this;
	this.instance_974.setTransform(392,96);

	this.instance_975 = new lib.wavelighttp40();
	this.instance_975.parent = this;
	this.instance_975.setTransform(364,96);

	this.instance_976 = new lib.wavelighttp40();
	this.instance_976.parent = this;
	this.instance_976.setTransform(336,96);

	this.instance_977 = new lib.wavelighttp40();
	this.instance_977.parent = this;
	this.instance_977.setTransform(308,96);

	this.instance_978 = new lib.wavelighttp40();
	this.instance_978.parent = this;
	this.instance_978.setTransform(280,96);

	this.instance_979 = new lib.wavelighttp40();
	this.instance_979.parent = this;
	this.instance_979.setTransform(252,96);

	this.instance_980 = new lib.wavelighttp40();
	this.instance_980.parent = this;
	this.instance_980.setTransform(224,96);

	this.instance_981 = new lib.wavelighttp40();
	this.instance_981.parent = this;
	this.instance_981.setTransform(196,96);

	this.instance_982 = new lib.wavelighttp40();
	this.instance_982.parent = this;
	this.instance_982.setTransform(168,96);

	this.instance_983 = new lib.wavelighttp40();
	this.instance_983.parent = this;
	this.instance_983.setTransform(140,96);

	this.instance_984 = new lib.wavelighttp40();
	this.instance_984.parent = this;
	this.instance_984.setTransform(112,96);

	this.instance_985 = new lib.wavelighttp40();
	this.instance_985.parent = this;
	this.instance_985.setTransform(84,96);

	this.instance_986 = new lib.wavelighttp40();
	this.instance_986.parent = this;
	this.instance_986.setTransform(56,96);

	this.instance_987 = new lib.wavelighttp40();
	this.instance_987.parent = this;
	this.instance_987.setTransform(28,96);

	this.instance_988 = new lib.wavelighttp40();
	this.instance_988.parent = this;
	this.instance_988.setTransform(0,96);

	this.instance_989 = new lib.wavelighttp40();
	this.instance_989.parent = this;
	this.instance_989.setTransform(1176,72);

	this.instance_990 = new lib.wavelighttp40();
	this.instance_990.parent = this;
	this.instance_990.setTransform(1148,72);

	this.instance_991 = new lib.wavelighttp40();
	this.instance_991.parent = this;
	this.instance_991.setTransform(1120,72);

	this.instance_992 = new lib.wavelighttp40();
	this.instance_992.parent = this;
	this.instance_992.setTransform(1092,72);

	this.instance_993 = new lib.wavelighttp40();
	this.instance_993.parent = this;
	this.instance_993.setTransform(1064,72);

	this.instance_994 = new lib.wavelighttp40();
	this.instance_994.parent = this;
	this.instance_994.setTransform(1036,72);

	this.instance_995 = new lib.wavelighttp40();
	this.instance_995.parent = this;
	this.instance_995.setTransform(1008,72);

	this.instance_996 = new lib.wavelighttp40();
	this.instance_996.parent = this;
	this.instance_996.setTransform(980,72);

	this.instance_997 = new lib.wavelighttp40();
	this.instance_997.parent = this;
	this.instance_997.setTransform(952,72);

	this.instance_998 = new lib.wavelighttp40();
	this.instance_998.parent = this;
	this.instance_998.setTransform(924,72);

	this.instance_999 = new lib.wavelighttp40();
	this.instance_999.parent = this;
	this.instance_999.setTransform(896,72);

	this.instance_1000 = new lib.wavelighttp40();
	this.instance_1000.parent = this;
	this.instance_1000.setTransform(868,72);

	this.instance_1001 = new lib.wavelighttp40();
	this.instance_1001.parent = this;
	this.instance_1001.setTransform(840,72);

	this.instance_1002 = new lib.wavelighttp40();
	this.instance_1002.parent = this;
	this.instance_1002.setTransform(812,72);

	this.instance_1003 = new lib.wavelighttp40();
	this.instance_1003.parent = this;
	this.instance_1003.setTransform(784,72);

	this.instance_1004 = new lib.wavelighttp40();
	this.instance_1004.parent = this;
	this.instance_1004.setTransform(756,72);

	this.instance_1005 = new lib.wavelighttp40();
	this.instance_1005.parent = this;
	this.instance_1005.setTransform(728,72);

	this.instance_1006 = new lib.wavelighttp40();
	this.instance_1006.parent = this;
	this.instance_1006.setTransform(700,72);

	this.instance_1007 = new lib.wavelighttp40();
	this.instance_1007.parent = this;
	this.instance_1007.setTransform(672,72);

	this.instance_1008 = new lib.wavelighttp40();
	this.instance_1008.parent = this;
	this.instance_1008.setTransform(644,72);

	this.instance_1009 = new lib.wavelighttp40();
	this.instance_1009.parent = this;
	this.instance_1009.setTransform(616,72);

	this.instance_1010 = new lib.wavelighttp40();
	this.instance_1010.parent = this;
	this.instance_1010.setTransform(588,72);

	this.instance_1011 = new lib.wavelighttp40();
	this.instance_1011.parent = this;
	this.instance_1011.setTransform(560,72);

	this.instance_1012 = new lib.wavelighttp40();
	this.instance_1012.parent = this;
	this.instance_1012.setTransform(532,72);

	this.instance_1013 = new lib.wavelighttp40();
	this.instance_1013.parent = this;
	this.instance_1013.setTransform(504,72);

	this.instance_1014 = new lib.wavelighttp40();
	this.instance_1014.parent = this;
	this.instance_1014.setTransform(476,72);

	this.instance_1015 = new lib.wavelighttp40();
	this.instance_1015.parent = this;
	this.instance_1015.setTransform(448,72);

	this.instance_1016 = new lib.wavelighttp40();
	this.instance_1016.parent = this;
	this.instance_1016.setTransform(420,72);

	this.instance_1017 = new lib.wavelighttp40();
	this.instance_1017.parent = this;
	this.instance_1017.setTransform(392,72);

	this.instance_1018 = new lib.wavelighttp40();
	this.instance_1018.parent = this;
	this.instance_1018.setTransform(364,72);

	this.instance_1019 = new lib.wavelighttp40();
	this.instance_1019.parent = this;
	this.instance_1019.setTransform(336,72);

	this.instance_1020 = new lib.wavelighttp40();
	this.instance_1020.parent = this;
	this.instance_1020.setTransform(308,72);

	this.instance_1021 = new lib.wavelighttp40();
	this.instance_1021.parent = this;
	this.instance_1021.setTransform(280,72);

	this.instance_1022 = new lib.wavelighttp40();
	this.instance_1022.parent = this;
	this.instance_1022.setTransform(252,72);

	this.instance_1023 = new lib.wavelighttp40();
	this.instance_1023.parent = this;
	this.instance_1023.setTransform(224,72);

	this.instance_1024 = new lib.wavelighttp40();
	this.instance_1024.parent = this;
	this.instance_1024.setTransform(196,72);

	this.instance_1025 = new lib.wavelighttp40();
	this.instance_1025.parent = this;
	this.instance_1025.setTransform(168,72);

	this.instance_1026 = new lib.wavelighttp40();
	this.instance_1026.parent = this;
	this.instance_1026.setTransform(140,72);

	this.instance_1027 = new lib.wavelighttp40();
	this.instance_1027.parent = this;
	this.instance_1027.setTransform(112,72);

	this.instance_1028 = new lib.wavelighttp40();
	this.instance_1028.parent = this;
	this.instance_1028.setTransform(84,72);

	this.instance_1029 = new lib.wavelighttp40();
	this.instance_1029.parent = this;
	this.instance_1029.setTransform(56,72);

	this.instance_1030 = new lib.wavelighttp40();
	this.instance_1030.parent = this;
	this.instance_1030.setTransform(28,72);

	this.instance_1031 = new lib.wavelighttp40();
	this.instance_1031.parent = this;
	this.instance_1031.setTransform(0,72);

	this.instance_1032 = new lib.wavelighttp40();
	this.instance_1032.parent = this;
	this.instance_1032.setTransform(1176,48);

	this.instance_1033 = new lib.wavelighttp40();
	this.instance_1033.parent = this;
	this.instance_1033.setTransform(1148,48);

	this.instance_1034 = new lib.wavelighttp40();
	this.instance_1034.parent = this;
	this.instance_1034.setTransform(1120,48);

	this.instance_1035 = new lib.wavelighttp40();
	this.instance_1035.parent = this;
	this.instance_1035.setTransform(1092,48);

	this.instance_1036 = new lib.wavelighttp40();
	this.instance_1036.parent = this;
	this.instance_1036.setTransform(1064,48);

	this.instance_1037 = new lib.wavelighttp40();
	this.instance_1037.parent = this;
	this.instance_1037.setTransform(1036,48);

	this.instance_1038 = new lib.wavelighttp40();
	this.instance_1038.parent = this;
	this.instance_1038.setTransform(1008,48);

	this.instance_1039 = new lib.wavelighttp40();
	this.instance_1039.parent = this;
	this.instance_1039.setTransform(980,48);

	this.instance_1040 = new lib.wavelighttp40();
	this.instance_1040.parent = this;
	this.instance_1040.setTransform(952,48);

	this.instance_1041 = new lib.wavelighttp40();
	this.instance_1041.parent = this;
	this.instance_1041.setTransform(924,48);

	this.instance_1042 = new lib.wavelighttp40();
	this.instance_1042.parent = this;
	this.instance_1042.setTransform(896,48);

	this.instance_1043 = new lib.wavelighttp40();
	this.instance_1043.parent = this;
	this.instance_1043.setTransform(868,48);

	this.instance_1044 = new lib.wavelighttp40();
	this.instance_1044.parent = this;
	this.instance_1044.setTransform(840,48);

	this.instance_1045 = new lib.wavelighttp40();
	this.instance_1045.parent = this;
	this.instance_1045.setTransform(812,48);

	this.instance_1046 = new lib.wavelighttp40();
	this.instance_1046.parent = this;
	this.instance_1046.setTransform(784,48);

	this.instance_1047 = new lib.wavelighttp40();
	this.instance_1047.parent = this;
	this.instance_1047.setTransform(756,48);

	this.instance_1048 = new lib.wavelighttp40();
	this.instance_1048.parent = this;
	this.instance_1048.setTransform(728,48);

	this.instance_1049 = new lib.wavelighttp40();
	this.instance_1049.parent = this;
	this.instance_1049.setTransform(700,48);

	this.instance_1050 = new lib.wavelighttp40();
	this.instance_1050.parent = this;
	this.instance_1050.setTransform(672,48);

	this.instance_1051 = new lib.wavelighttp40();
	this.instance_1051.parent = this;
	this.instance_1051.setTransform(644,48);

	this.instance_1052 = new lib.wavelighttp40();
	this.instance_1052.parent = this;
	this.instance_1052.setTransform(616,48);

	this.instance_1053 = new lib.wavelighttp40();
	this.instance_1053.parent = this;
	this.instance_1053.setTransform(588,48);

	this.instance_1054 = new lib.wavelighttp40();
	this.instance_1054.parent = this;
	this.instance_1054.setTransform(560,48);

	this.instance_1055 = new lib.wavelighttp40();
	this.instance_1055.parent = this;
	this.instance_1055.setTransform(532,48);

	this.instance_1056 = new lib.wavelighttp40();
	this.instance_1056.parent = this;
	this.instance_1056.setTransform(504,48);

	this.instance_1057 = new lib.wavelighttp40();
	this.instance_1057.parent = this;
	this.instance_1057.setTransform(476,48);

	this.instance_1058 = new lib.wavelighttp40();
	this.instance_1058.parent = this;
	this.instance_1058.setTransform(448,48);

	this.instance_1059 = new lib.wavelighttp40();
	this.instance_1059.parent = this;
	this.instance_1059.setTransform(420,48);

	this.instance_1060 = new lib.wavelighttp40();
	this.instance_1060.parent = this;
	this.instance_1060.setTransform(392,48);

	this.instance_1061 = new lib.wavelighttp40();
	this.instance_1061.parent = this;
	this.instance_1061.setTransform(364,48);

	this.instance_1062 = new lib.wavelighttp40();
	this.instance_1062.parent = this;
	this.instance_1062.setTransform(336,48);

	this.instance_1063 = new lib.wavelighttp40();
	this.instance_1063.parent = this;
	this.instance_1063.setTransform(308,48);

	this.instance_1064 = new lib.wavelighttp40();
	this.instance_1064.parent = this;
	this.instance_1064.setTransform(280,48);

	this.instance_1065 = new lib.wavelighttp40();
	this.instance_1065.parent = this;
	this.instance_1065.setTransform(252,48);

	this.instance_1066 = new lib.wavelighttp40();
	this.instance_1066.parent = this;
	this.instance_1066.setTransform(224,48);

	this.instance_1067 = new lib.wavelighttp40();
	this.instance_1067.parent = this;
	this.instance_1067.setTransform(196,48);

	this.instance_1068 = new lib.wavelighttp40();
	this.instance_1068.parent = this;
	this.instance_1068.setTransform(168,48);

	this.instance_1069 = new lib.wavelighttp40();
	this.instance_1069.parent = this;
	this.instance_1069.setTransform(140,48);

	this.instance_1070 = new lib.wavelighttp40();
	this.instance_1070.parent = this;
	this.instance_1070.setTransform(112,48);

	this.instance_1071 = new lib.wavelighttp40();
	this.instance_1071.parent = this;
	this.instance_1071.setTransform(84,48);

	this.instance_1072 = new lib.wavelighttp40();
	this.instance_1072.parent = this;
	this.instance_1072.setTransform(56,48);

	this.instance_1073 = new lib.wavelighttp40();
	this.instance_1073.parent = this;
	this.instance_1073.setTransform(28,48);

	this.instance_1074 = new lib.wavelighttp40();
	this.instance_1074.parent = this;
	this.instance_1074.setTransform(0,48);

	this.instance_1075 = new lib.wavelighttp40();
	this.instance_1075.parent = this;
	this.instance_1075.setTransform(1176,24);

	this.instance_1076 = new lib.wavelighttp40();
	this.instance_1076.parent = this;
	this.instance_1076.setTransform(1148,24);

	this.instance_1077 = new lib.wavelighttp40();
	this.instance_1077.parent = this;
	this.instance_1077.setTransform(1120,24);

	this.instance_1078 = new lib.wavelighttp40();
	this.instance_1078.parent = this;
	this.instance_1078.setTransform(1092,24);

	this.instance_1079 = new lib.wavelighttp40();
	this.instance_1079.parent = this;
	this.instance_1079.setTransform(1064,24);

	this.instance_1080 = new lib.wavelighttp40();
	this.instance_1080.parent = this;
	this.instance_1080.setTransform(1036,24);

	this.instance_1081 = new lib.wavelighttp40();
	this.instance_1081.parent = this;
	this.instance_1081.setTransform(1008,24);

	this.instance_1082 = new lib.wavelighttp40();
	this.instance_1082.parent = this;
	this.instance_1082.setTransform(980,24);

	this.instance_1083 = new lib.wavelighttp40();
	this.instance_1083.parent = this;
	this.instance_1083.setTransform(952,24);

	this.instance_1084 = new lib.wavelighttp40();
	this.instance_1084.parent = this;
	this.instance_1084.setTransform(924,24);

	this.instance_1085 = new lib.wavelighttp40();
	this.instance_1085.parent = this;
	this.instance_1085.setTransform(896,24);

	this.instance_1086 = new lib.wavelighttp40();
	this.instance_1086.parent = this;
	this.instance_1086.setTransform(868,24);

	this.instance_1087 = new lib.wavelighttp40();
	this.instance_1087.parent = this;
	this.instance_1087.setTransform(840,24);

	this.instance_1088 = new lib.wavelighttp40();
	this.instance_1088.parent = this;
	this.instance_1088.setTransform(812,24);

	this.instance_1089 = new lib.wavelighttp40();
	this.instance_1089.parent = this;
	this.instance_1089.setTransform(784,24);

	this.instance_1090 = new lib.wavelighttp40();
	this.instance_1090.parent = this;
	this.instance_1090.setTransform(756,24);

	this.instance_1091 = new lib.wavelighttp40();
	this.instance_1091.parent = this;
	this.instance_1091.setTransform(728,24);

	this.instance_1092 = new lib.wavelighttp40();
	this.instance_1092.parent = this;
	this.instance_1092.setTransform(700,24);

	this.instance_1093 = new lib.wavelighttp40();
	this.instance_1093.parent = this;
	this.instance_1093.setTransform(672,24);

	this.instance_1094 = new lib.wavelighttp40();
	this.instance_1094.parent = this;
	this.instance_1094.setTransform(644,24);

	this.instance_1095 = new lib.wavelighttp40();
	this.instance_1095.parent = this;
	this.instance_1095.setTransform(616,24);

	this.instance_1096 = new lib.wavelighttp40();
	this.instance_1096.parent = this;
	this.instance_1096.setTransform(588,24);

	this.instance_1097 = new lib.wavelighttp40();
	this.instance_1097.parent = this;
	this.instance_1097.setTransform(560,24);

	this.instance_1098 = new lib.wavelighttp40();
	this.instance_1098.parent = this;
	this.instance_1098.setTransform(532,24);

	this.instance_1099 = new lib.wavelighttp40();
	this.instance_1099.parent = this;
	this.instance_1099.setTransform(504,24);

	this.instance_1100 = new lib.wavelighttp40();
	this.instance_1100.parent = this;
	this.instance_1100.setTransform(476,24);

	this.instance_1101 = new lib.wavelighttp40();
	this.instance_1101.parent = this;
	this.instance_1101.setTransform(448,24);

	this.instance_1102 = new lib.wavelighttp40();
	this.instance_1102.parent = this;
	this.instance_1102.setTransform(420,24);

	this.instance_1103 = new lib.wavelighttp40();
	this.instance_1103.parent = this;
	this.instance_1103.setTransform(392,24);

	this.instance_1104 = new lib.wavelighttp40();
	this.instance_1104.parent = this;
	this.instance_1104.setTransform(364,24);

	this.instance_1105 = new lib.wavelighttp40();
	this.instance_1105.parent = this;
	this.instance_1105.setTransform(336,24);

	this.instance_1106 = new lib.wavelighttp40();
	this.instance_1106.parent = this;
	this.instance_1106.setTransform(308,24);

	this.instance_1107 = new lib.wavelighttp40();
	this.instance_1107.parent = this;
	this.instance_1107.setTransform(280,24);

	this.instance_1108 = new lib.wavelighttp40();
	this.instance_1108.parent = this;
	this.instance_1108.setTransform(252,24);

	this.instance_1109 = new lib.wavelighttp40();
	this.instance_1109.parent = this;
	this.instance_1109.setTransform(224,24);

	this.instance_1110 = new lib.wavelighttp40();
	this.instance_1110.parent = this;
	this.instance_1110.setTransform(196,24);

	this.instance_1111 = new lib.wavelighttp40();
	this.instance_1111.parent = this;
	this.instance_1111.setTransform(168,24);

	this.instance_1112 = new lib.wavelighttp40();
	this.instance_1112.parent = this;
	this.instance_1112.setTransform(140,24);

	this.instance_1113 = new lib.wavelighttp40();
	this.instance_1113.parent = this;
	this.instance_1113.setTransform(112,24);

	this.instance_1114 = new lib.wavelighttp40();
	this.instance_1114.parent = this;
	this.instance_1114.setTransform(84,24);

	this.instance_1115 = new lib.wavelighttp40();
	this.instance_1115.parent = this;
	this.instance_1115.setTransform(56,24);

	this.instance_1116 = new lib.wavelighttp40();
	this.instance_1116.parent = this;
	this.instance_1116.setTransform(28,24);

	this.instance_1117 = new lib.wavelighttp40();
	this.instance_1117.parent = this;
	this.instance_1117.setTransform(0,24);

	this.instance_1118 = new lib.wavelighttp40();
	this.instance_1118.parent = this;
	this.instance_1118.setTransform(1176,0);

	this.instance_1119 = new lib.wavelighttp40();
	this.instance_1119.parent = this;
	this.instance_1119.setTransform(1148,0);

	this.instance_1120 = new lib.wavelighttp40();
	this.instance_1120.parent = this;
	this.instance_1120.setTransform(1120,0);

	this.instance_1121 = new lib.wavelighttp40();
	this.instance_1121.parent = this;
	this.instance_1121.setTransform(1092,0);

	this.instance_1122 = new lib.wavelighttp40();
	this.instance_1122.parent = this;
	this.instance_1122.setTransform(1064,0);

	this.instance_1123 = new lib.wavelighttp40();
	this.instance_1123.parent = this;
	this.instance_1123.setTransform(1036,0);

	this.instance_1124 = new lib.wavelighttp40();
	this.instance_1124.parent = this;
	this.instance_1124.setTransform(1008,0);

	this.instance_1125 = new lib.wavelighttp40();
	this.instance_1125.parent = this;
	this.instance_1125.setTransform(980,0);

	this.instance_1126 = new lib.wavelighttp40();
	this.instance_1126.parent = this;
	this.instance_1126.setTransform(952,0);

	this.instance_1127 = new lib.wavelighttp40();
	this.instance_1127.parent = this;
	this.instance_1127.setTransform(924,0);

	this.instance_1128 = new lib.wavelighttp40();
	this.instance_1128.parent = this;
	this.instance_1128.setTransform(896,0);

	this.instance_1129 = new lib.wavelighttp40();
	this.instance_1129.parent = this;
	this.instance_1129.setTransform(868,0);

	this.instance_1130 = new lib.wavelighttp40();
	this.instance_1130.parent = this;
	this.instance_1130.setTransform(840,0);

	this.instance_1131 = new lib.wavelighttp40();
	this.instance_1131.parent = this;
	this.instance_1131.setTransform(812,0);

	this.instance_1132 = new lib.wavelighttp40();
	this.instance_1132.parent = this;
	this.instance_1132.setTransform(784,0);

	this.instance_1133 = new lib.wavelighttp40();
	this.instance_1133.parent = this;
	this.instance_1133.setTransform(756,0);

	this.instance_1134 = new lib.wavelighttp40();
	this.instance_1134.parent = this;
	this.instance_1134.setTransform(728,0);

	this.instance_1135 = new lib.wavelighttp40();
	this.instance_1135.parent = this;
	this.instance_1135.setTransform(700,0);

	this.instance_1136 = new lib.wavelighttp40();
	this.instance_1136.parent = this;
	this.instance_1136.setTransform(672,0);

	this.instance_1137 = new lib.wavelighttp40();
	this.instance_1137.parent = this;
	this.instance_1137.setTransform(644,0);

	this.instance_1138 = new lib.wavelighttp40();
	this.instance_1138.parent = this;
	this.instance_1138.setTransform(616,0);

	this.instance_1139 = new lib.wavelighttp40();
	this.instance_1139.parent = this;
	this.instance_1139.setTransform(588,0);

	this.instance_1140 = new lib.wavelighttp40();
	this.instance_1140.parent = this;
	this.instance_1140.setTransform(560,0);

	this.instance_1141 = new lib.wavelighttp40();
	this.instance_1141.parent = this;
	this.instance_1141.setTransform(532,0);

	this.instance_1142 = new lib.wavelighttp40();
	this.instance_1142.parent = this;
	this.instance_1142.setTransform(504,0);

	this.instance_1143 = new lib.wavelighttp40();
	this.instance_1143.parent = this;
	this.instance_1143.setTransform(476,0);

	this.instance_1144 = new lib.wavelighttp40();
	this.instance_1144.parent = this;
	this.instance_1144.setTransform(448,0);

	this.instance_1145 = new lib.wavelighttp40();
	this.instance_1145.parent = this;
	this.instance_1145.setTransform(420,0);

	this.instance_1146 = new lib.wavelighttp40();
	this.instance_1146.parent = this;
	this.instance_1146.setTransform(392,0);

	this.instance_1147 = new lib.wavelighttp40();
	this.instance_1147.parent = this;
	this.instance_1147.setTransform(364,0);

	this.instance_1148 = new lib.wavelighttp40();
	this.instance_1148.parent = this;
	this.instance_1148.setTransform(336,0);

	this.instance_1149 = new lib.wavelighttp40();
	this.instance_1149.parent = this;
	this.instance_1149.setTransform(308,0);

	this.instance_1150 = new lib.wavelighttp40();
	this.instance_1150.parent = this;
	this.instance_1150.setTransform(280,0);

	this.instance_1151 = new lib.wavelighttp40();
	this.instance_1151.parent = this;
	this.instance_1151.setTransform(252,0);

	this.instance_1152 = new lib.wavelighttp40();
	this.instance_1152.parent = this;
	this.instance_1152.setTransform(224,0);

	this.instance_1153 = new lib.wavelighttp40();
	this.instance_1153.parent = this;
	this.instance_1153.setTransform(196,0);

	this.instance_1154 = new lib.wavelighttp40();
	this.instance_1154.parent = this;
	this.instance_1154.setTransform(168,0);

	this.instance_1155 = new lib.wavelighttp40();
	this.instance_1155.parent = this;
	this.instance_1155.setTransform(140,0);

	this.instance_1156 = new lib.wavelighttp40();
	this.instance_1156.parent = this;
	this.instance_1156.setTransform(112,0);

	this.instance_1157 = new lib.wavelighttp40();
	this.instance_1157.parent = this;
	this.instance_1157.setTransform(84,0);

	this.instance_1158 = new lib.wavelighttp40();
	this.instance_1158.parent = this;
	this.instance_1158.setTransform(56,0);

	this.instance_1159 = new lib.wavelighttp40();
	this.instance_1159.parent = this;
	this.instance_1159.setTransform(28,0);

	this.instance_1160 = new lib.wavelighttp40();
	this.instance_1160.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1160},{t:this.instance_1159},{t:this.instance_1158},{t:this.instance_1157},{t:this.instance_1156},{t:this.instance_1155},{t:this.instance_1154},{t:this.instance_1153},{t:this.instance_1152},{t:this.instance_1151},{t:this.instance_1150},{t:this.instance_1149},{t:this.instance_1148},{t:this.instance_1147},{t:this.instance_1146},{t:this.instance_1145},{t:this.instance_1144},{t:this.instance_1143},{t:this.instance_1142},{t:this.instance_1141},{t:this.instance_1140},{t:this.instance_1139},{t:this.instance_1138},{t:this.instance_1137},{t:this.instance_1136},{t:this.instance_1135},{t:this.instance_1134},{t:this.instance_1133},{t:this.instance_1132},{t:this.instance_1131},{t:this.instance_1130},{t:this.instance_1129},{t:this.instance_1128},{t:this.instance_1127},{t:this.instance_1126},{t:this.instance_1125},{t:this.instance_1124},{t:this.instance_1123},{t:this.instance_1122},{t:this.instance_1121},{t:this.instance_1120},{t:this.instance_1119},{t:this.instance_1118},{t:this.instance_1117},{t:this.instance_1116},{t:this.instance_1115},{t:this.instance_1114},{t:this.instance_1113},{t:this.instance_1112},{t:this.instance_1111},{t:this.instance_1110},{t:this.instance_1109},{t:this.instance_1108},{t:this.instance_1107},{t:this.instance_1106},{t:this.instance_1105},{t:this.instance_1104},{t:this.instance_1103},{t:this.instance_1102},{t:this.instance_1101},{t:this.instance_1100},{t:this.instance_1099},{t:this.instance_1098},{t:this.instance_1097},{t:this.instance_1096},{t:this.instance_1095},{t:this.instance_1094},{t:this.instance_1093},{t:this.instance_1092},{t:this.instance_1091},{t:this.instance_1090},{t:this.instance_1089},{t:this.instance_1088},{t:this.instance_1087},{t:this.instance_1086},{t:this.instance_1085},{t:this.instance_1084},{t:this.instance_1083},{t:this.instance_1082},{t:this.instance_1081},{t:this.instance_1080},{t:this.instance_1079},{t:this.instance_1078},{t:this.instance_1077},{t:this.instance_1076},{t:this.instance_1075},{t:this.instance_1074},{t:this.instance_1073},{t:this.instance_1072},{t:this.instance_1071},{t:this.instance_1070},{t:this.instance_1069},{t:this.instance_1068},{t:this.instance_1067},{t:this.instance_1066},{t:this.instance_1065},{t:this.instance_1064},{t:this.instance_1063},{t:this.instance_1062},{t:this.instance_1061},{t:this.instance_1060},{t:this.instance_1059},{t:this.instance_1058},{t:this.instance_1057},{t:this.instance_1056},{t:this.instance_1055},{t:this.instance_1054},{t:this.instance_1053},{t:this.instance_1052},{t:this.instance_1051},{t:this.instance_1050},{t:this.instance_1049},{t:this.instance_1048},{t:this.instance_1047},{t:this.instance_1046},{t:this.instance_1045},{t:this.instance_1044},{t:this.instance_1043},{t:this.instance_1042},{t:this.instance_1041},{t:this.instance_1040},{t:this.instance_1039},{t:this.instance_1038},{t:this.instance_1037},{t:this.instance_1036},{t:this.instance_1035},{t:this.instance_1034},{t:this.instance_1033},{t:this.instance_1032},{t:this.instance_1031},{t:this.instance_1030},{t:this.instance_1029},{t:this.instance_1028},{t:this.instance_1027},{t:this.instance_1026},{t:this.instance_1025},{t:this.instance_1024},{t:this.instance_1023},{t:this.instance_1022},{t:this.instance_1021},{t:this.instance_1020},{t:this.instance_1019},{t:this.instance_1018},{t:this.instance_1017},{t:this.instance_1016},{t:this.instance_1015},{t:this.instance_1014},{t:this.instance_1013},{t:this.instance_1012},{t:this.instance_1011},{t:this.instance_1010},{t:this.instance_1009},{t:this.instance_1008},{t:this.instance_1007},{t:this.instance_1006},{t:this.instance_1005},{t:this.instance_1004},{t:this.instance_1003},{t:this.instance_1002},{t:this.instance_1001},{t:this.instance_1000},{t:this.instance_999},{t:this.instance_998},{t:this.instance_997},{t:this.instance_996},{t:this.instance_995},{t:this.instance_994},{t:this.instance_993},{t:this.instance_992},{t:this.instance_991},{t:this.instance_990},{t:this.instance_989},{t:this.instance_988},{t:this.instance_987},{t:this.instance_986},{t:this.instance_985},{t:this.instance_984},{t:this.instance_983},{t:this.instance_982},{t:this.instance_981},{t:this.instance_980},{t:this.instance_979},{t:this.instance_978},{t:this.instance_977},{t:this.instance_976},{t:this.instance_975},{t:this.instance_974},{t:this.instance_973},{t:this.instance_972},{t:this.instance_971},{t:this.instance_970},{t:this.instance_969},{t:this.instance_968},{t:this.instance_967},{t:this.instance_966},{t:this.instance_965},{t:this.instance_964},{t:this.instance_963},{t:this.instance_962},{t:this.instance_961},{t:this.instance_960},{t:this.instance_959},{t:this.instance_958},{t:this.instance_957},{t:this.instance_956},{t:this.instance_955},{t:this.instance_954},{t:this.instance_953},{t:this.instance_952},{t:this.instance_951},{t:this.instance_950},{t:this.instance_949},{t:this.instance_948},{t:this.instance_947},{t:this.instance_946},{t:this.instance_945},{t:this.instance_944},{t:this.instance_943},{t:this.instance_942},{t:this.instance_941},{t:this.instance_940},{t:this.instance_939},{t:this.instance_938},{t:this.instance_937},{t:this.instance_936},{t:this.instance_935},{t:this.instance_934},{t:this.instance_933},{t:this.instance_932},{t:this.instance_931},{t:this.instance_930},{t:this.instance_929},{t:this.instance_928},{t:this.instance_927},{t:this.instance_926},{t:this.instance_925},{t:this.instance_924},{t:this.instance_923},{t:this.instance_922},{t:this.instance_921},{t:this.instance_920},{t:this.instance_919},{t:this.instance_918},{t:this.instance_917},{t:this.instance_916},{t:this.instance_915},{t:this.instance_914},{t:this.instance_913},{t:this.instance_912},{t:this.instance_911},{t:this.instance_910},{t:this.instance_909},{t:this.instance_908},{t:this.instance_907},{t:this.instance_906},{t:this.instance_905},{t:this.instance_904},{t:this.instance_903},{t:this.instance_902},{t:this.instance_901},{t:this.instance_900},{t:this.instance_899},{t:this.instance_898},{t:this.instance_897},{t:this.instance_896},{t:this.instance_895},{t:this.instance_894},{t:this.instance_893},{t:this.instance_892},{t:this.instance_891},{t:this.instance_890},{t:this.instance_889},{t:this.instance_888},{t:this.instance_887},{t:this.instance_886},{t:this.instance_885},{t:this.instance_884},{t:this.instance_883},{t:this.instance_882},{t:this.instance_881},{t:this.instance_880},{t:this.instance_879},{t:this.instance_878},{t:this.instance_877},{t:this.instance_876},{t:this.instance_875},{t:this.instance_874},{t:this.instance_873},{t:this.instance_872},{t:this.instance_871},{t:this.instance_870},{t:this.instance_869},{t:this.instance_868},{t:this.instance_867},{t:this.instance_866},{t:this.instance_865},{t:this.instance_864},{t:this.instance_863},{t:this.instance_862},{t:this.instance_861},{t:this.instance_860},{t:this.instance_859},{t:this.instance_858},{t:this.instance_857},{t:this.instance_856},{t:this.instance_855},{t:this.instance_854},{t:this.instance_853},{t:this.instance_852},{t:this.instance_851},{t:this.instance_850},{t:this.instance_849},{t:this.instance_848},{t:this.instance_847},{t:this.instance_846},{t:this.instance_845},{t:this.instance_844},{t:this.instance_843},{t:this.instance_842},{t:this.instance_841},{t:this.instance_840},{t:this.instance_839},{t:this.instance_838},{t:this.instance_837},{t:this.instance_836},{t:this.instance_835},{t:this.instance_834},{t:this.instance_833},{t:this.instance_832},{t:this.instance_831},{t:this.instance_830},{t:this.instance_829},{t:this.instance_828},{t:this.instance_827},{t:this.instance_826},{t:this.instance_825},{t:this.instance_824},{t:this.instance_823},{t:this.instance_822},{t:this.instance_821},{t:this.instance_820},{t:this.instance_819},{t:this.instance_818},{t:this.instance_817},{t:this.instance_816},{t:this.instance_815},{t:this.instance_814},{t:this.instance_813},{t:this.instance_812},{t:this.instance_811},{t:this.instance_810},{t:this.instance_809},{t:this.instance_808},{t:this.instance_807},{t:this.instance_806},{t:this.instance_805},{t:this.instance_804},{t:this.instance_803},{t:this.instance_802},{t:this.instance_801},{t:this.instance_800},{t:this.instance_799},{t:this.instance_798},{t:this.instance_797},{t:this.instance_796},{t:this.instance_795},{t:this.instance_794},{t:this.instance_793},{t:this.instance_792},{t:this.instance_791},{t:this.instance_790},{t:this.instance_789},{t:this.instance_788},{t:this.instance_787},{t:this.instance_786},{t:this.instance_785},{t:this.instance_784},{t:this.instance_783},{t:this.instance_782},{t:this.instance_781},{t:this.instance_780},{t:this.instance_779},{t:this.instance_778},{t:this.instance_777},{t:this.instance_776},{t:this.instance_775},{t:this.instance_774},{t:this.instance_773},{t:this.instance_772},{t:this.instance_771},{t:this.instance_770},{t:this.instance_769},{t:this.instance_768},{t:this.instance_767},{t:this.instance_766},{t:this.instance_765},{t:this.instance_764},{t:this.instance_763},{t:this.instance_762},{t:this.instance_761},{t:this.instance_760},{t:this.instance_759},{t:this.instance_758},{t:this.instance_757},{t:this.instance_756},{t:this.instance_755},{t:this.instance_754},{t:this.instance_753},{t:this.instance_752},{t:this.instance_751},{t:this.instance_750},{t:this.instance_749},{t:this.instance_748},{t:this.instance_747},{t:this.instance_746},{t:this.instance_745},{t:this.instance_744},{t:this.instance_743},{t:this.instance_742},{t:this.instance_741},{t:this.instance_740},{t:this.instance_739},{t:this.instance_738},{t:this.instance_737},{t:this.instance_736},{t:this.instance_735},{t:this.instance_734},{t:this.instance_733},{t:this.instance_732},{t:this.instance_731},{t:this.instance_730},{t:this.instance_729},{t:this.instance_728},{t:this.instance_727},{t:this.instance_726},{t:this.instance_725},{t:this.instance_724},{t:this.instance_723},{t:this.instance_722},{t:this.instance_721},{t:this.instance_720},{t:this.instance_719},{t:this.instance_718},{t:this.instance_717},{t:this.instance_716},{t:this.instance_715},{t:this.instance_714},{t:this.instance_713},{t:this.instance_712},{t:this.instance_711},{t:this.instance_710},{t:this.instance_709},{t:this.instance_708},{t:this.instance_707},{t:this.instance_706},{t:this.instance_705},{t:this.instance_704},{t:this.instance_703},{t:this.instance_702},{t:this.instance_701},{t:this.instance_700},{t:this.instance_699},{t:this.instance_698},{t:this.instance_697},{t:this.instance_696},{t:this.instance_695},{t:this.instance_694},{t:this.instance_693},{t:this.instance_692},{t:this.instance_691},{t:this.instance_690},{t:this.instance_689},{t:this.instance_688},{t:this.instance_687},{t:this.instance_686},{t:this.instance_685},{t:this.instance_684},{t:this.instance_683},{t:this.instance_682},{t:this.instance_681},{t:this.instance_680},{t:this.instance_679},{t:this.instance_678},{t:this.instance_677},{t:this.instance_676},{t:this.instance_675},{t:this.instance_674},{t:this.instance_673},{t:this.instance_672},{t:this.instance_671},{t:this.instance_670},{t:this.instance_669},{t:this.instance_668},{t:this.instance_667},{t:this.instance_666},{t:this.instance_665},{t:this.instance_664},{t:this.instance_663},{t:this.instance_662},{t:this.instance_661},{t:this.instance_660},{t:this.instance_659},{t:this.instance_658},{t:this.instance_657},{t:this.instance_656},{t:this.instance_655},{t:this.instance_654},{t:this.instance_653},{t:this.instance_652},{t:this.instance_651},{t:this.instance_650},{t:this.instance_649},{t:this.instance_648},{t:this.instance_647},{t:this.instance_646},{t:this.instance_645},{t:this.instance_644},{t:this.instance_643},{t:this.instance_642},{t:this.instance_641},{t:this.instance_640},{t:this.instance_639},{t:this.instance_638},{t:this.instance_637},{t:this.instance_636},{t:this.instance_635},{t:this.instance_634},{t:this.instance_633},{t:this.instance_632},{t:this.instance_631},{t:this.instance_630},{t:this.instance_629},{t:this.instance_628},{t:this.instance_627},{t:this.instance_626},{t:this.instance_625},{t:this.instance_624},{t:this.instance_623},{t:this.instance_622},{t:this.instance_621},{t:this.instance_620},{t:this.instance_619},{t:this.instance_618},{t:this.instance_617},{t:this.instance_616},{t:this.instance_615},{t:this.instance_614},{t:this.instance_613},{t:this.instance_612},{t:this.instance_611},{t:this.instance_610},{t:this.instance_609},{t:this.instance_608},{t:this.instance_607},{t:this.instance_606},{t:this.instance_605},{t:this.instance_604},{t:this.instance_603},{t:this.instance_602},{t:this.instance_601},{t:this.instance_600},{t:this.instance_599},{t:this.instance_598},{t:this.instance_597},{t:this.instance_596},{t:this.instance_595},{t:this.instance_594},{t:this.instance_593},{t:this.instance_592},{t:this.instance_591},{t:this.instance_590},{t:this.instance_589},{t:this.instance_588},{t:this.instance_587},{t:this.instance_586},{t:this.instance_585},{t:this.instance_584},{t:this.instance_583},{t:this.instance_582},{t:this.instance_581},{t:this.instance_580},{t:this.instance_579},{t:this.instance_578},{t:this.instance_577},{t:this.instance_576},{t:this.instance_575},{t:this.instance_574},{t:this.instance_573},{t:this.instance_572},{t:this.instance_571},{t:this.instance_570},{t:this.instance_569},{t:this.instance_568},{t:this.instance_567},{t:this.instance_566},{t:this.instance_565},{t:this.instance_564},{t:this.instance_563},{t:this.instance_562},{t:this.instance_561},{t:this.instance_560},{t:this.instance_559},{t:this.instance_558},{t:this.instance_557},{t:this.instance_556},{t:this.instance_555},{t:this.instance_554},{t:this.instance_553},{t:this.instance_552},{t:this.instance_551},{t:this.instance_550},{t:this.instance_549},{t:this.instance_548},{t:this.instance_547},{t:this.instance_546},{t:this.instance_545},{t:this.instance_544},{t:this.instance_543},{t:this.instance_542},{t:this.instance_541},{t:this.instance_540},{t:this.instance_539},{t:this.instance_538},{t:this.instance_537},{t:this.instance_536},{t:this.instance_535},{t:this.instance_534},{t:this.instance_533},{t:this.instance_532},{t:this.instance_531},{t:this.instance_530},{t:this.instance_529},{t:this.instance_528},{t:this.instance_527},{t:this.instance_526},{t:this.instance_525},{t:this.instance_524},{t:this.instance_523},{t:this.instance_522},{t:this.instance_521},{t:this.instance_520},{t:this.instance_519},{t:this.instance_518},{t:this.instance_517},{t:this.instance_516},{t:this.instance_515},{t:this.instance_514},{t:this.instance_513},{t:this.instance_512},{t:this.instance_511},{t:this.instance_510},{t:this.instance_509},{t:this.instance_508},{t:this.instance_507},{t:this.instance_506},{t:this.instance_505},{t:this.instance_504},{t:this.instance_503},{t:this.instance_502},{t:this.instance_501},{t:this.instance_500},{t:this.instance_499},{t:this.instance_498},{t:this.instance_497},{t:this.instance_496},{t:this.instance_495},{t:this.instance_494},{t:this.instance_493},{t:this.instance_492},{t:this.instance_491},{t:this.instance_490},{t:this.instance_489},{t:this.instance_488},{t:this.instance_487},{t:this.instance_486},{t:this.instance_485},{t:this.instance_484},{t:this.instance_483},{t:this.instance_482},{t:this.instance_481},{t:this.instance_480},{t:this.instance_479},{t:this.instance_478},{t:this.instance_477},{t:this.instance_476},{t:this.instance_475},{t:this.instance_474},{t:this.instance_473},{t:this.instance_472},{t:this.instance_471},{t:this.instance_470},{t:this.instance_469},{t:this.instance_468},{t:this.instance_467},{t:this.instance_466},{t:this.instance_465},{t:this.instance_464},{t:this.instance_463},{t:this.instance_462},{t:this.instance_461},{t:this.instance_460},{t:this.instance_459},{t:this.instance_458},{t:this.instance_457},{t:this.instance_456},{t:this.instance_455},{t:this.instance_454},{t:this.instance_453},{t:this.instance_452},{t:this.instance_451},{t:this.instance_450},{t:this.instance_449},{t:this.instance_448},{t:this.instance_447},{t:this.instance_446},{t:this.instance_445},{t:this.instance_444},{t:this.instance_443},{t:this.instance_442},{t:this.instance_441},{t:this.instance_440},{t:this.instance_439},{t:this.instance_438},{t:this.instance_437},{t:this.instance_436},{t:this.instance_435},{t:this.instance_434},{t:this.instance_433},{t:this.instance_432},{t:this.instance_431},{t:this.instance_430},{t:this.instance_429},{t:this.instance_428},{t:this.instance_427},{t:this.instance_426},{t:this.instance_425},{t:this.instance_424},{t:this.instance_423},{t:this.instance_422},{t:this.instance_421},{t:this.instance_420},{t:this.instance_419},{t:this.instance_418},{t:this.instance_417},{t:this.instance_416},{t:this.instance_415},{t:this.instance_414},{t:this.instance_413},{t:this.instance_412},{t:this.instance_411},{t:this.instance_410},{t:this.instance_409},{t:this.instance_408},{t:this.instance_407},{t:this.instance_406},{t:this.instance_405},{t:this.instance_404},{t:this.instance_403},{t:this.instance_402},{t:this.instance_401},{t:this.instance_400},{t:this.instance_399},{t:this.instance_398},{t:this.instance_397},{t:this.instance_396},{t:this.instance_395},{t:this.instance_394},{t:this.instance_393},{t:this.instance_392},{t:this.instance_391},{t:this.instance_390},{t:this.instance_389},{t:this.instance_388},{t:this.instance_387},{t:this.instance_386},{t:this.instance_385},{t:this.instance_384},{t:this.instance_383},{t:this.instance_382},{t:this.instance_381},{t:this.instance_380},{t:this.instance_379},{t:this.instance_378},{t:this.instance_377},{t:this.instance_376},{t:this.instance_375},{t:this.instance_374},{t:this.instance_373},{t:this.instance_372},{t:this.instance_371},{t:this.instance_370},{t:this.instance_369},{t:this.instance_368},{t:this.instance_367},{t:this.instance_366},{t:this.instance_365},{t:this.instance_364},{t:this.instance_363},{t:this.instance_362},{t:this.instance_361},{t:this.instance_360},{t:this.instance_359},{t:this.instance_358},{t:this.instance_357},{t:this.instance_356},{t:this.instance_355},{t:this.instance_354},{t:this.instance_353},{t:this.instance_352},{t:this.instance_351},{t:this.instance_350},{t:this.instance_349},{t:this.instance_348},{t:this.instance_347},{t:this.instance_346},{t:this.instance_345},{t:this.instance_344},{t:this.instance_343},{t:this.instance_342},{t:this.instance_341},{t:this.instance_340},{t:this.instance_339},{t:this.instance_338},{t:this.instance_337},{t:this.instance_336},{t:this.instance_335},{t:this.instance_334},{t:this.instance_333},{t:this.instance_332},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgwave, rect = new cjs.Rectangle(0,0,1204,648), [rect]);


(lib.apply = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2,y:2},0).wait(1).to({x:0,y:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,227,84);
p.frameBounds = [rect, new cjs.Rectangle(2,2,227,84), rect=new cjs.Rectangle(0,0,227,84), rect];


(lib.account = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.btn11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1,y:1},0).wait(1).to({x:0,y:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,227,84);
p.frameBounds = [rect, new cjs.Rectangle(1,1,227,84), rect=new cjs.Rectangle(0,0,227,84), rect];


(lib.man = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(236.5,262,1,1,0,0,0,236.5,267);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.2,x:236.7,y:261.8},0).wait(1).to({rotation:0.4,x:236.9,y:261.6},0).wait(1).to({rotation:0.7,x:237,y:261.4},0).wait(1).to({rotation:0.9,x:237.2,y:261.2},0).wait(1).to({rotation:1.1,x:237.4,y:261},0).wait(1).to({rotation:1.3,x:237.6,y:260.8},0).wait(1).to({rotation:1.5,x:237.7,y:260.5},0).wait(1).to({rotation:1.7,x:237.9,y:260.3},0).wait(1).to({rotation:2,x:238.1,y:260.1},0).wait(1).to({rotation:2.2,x:238.3,y:259.8},0).wait(1).to({rotation:2.4,x:238.4,y:259.6},0).wait(1).to({rotation:2.6,x:238.6,y:259.4},0).wait(1).to({rotation:2.8,x:238.8,y:259.2},0).wait(1).to({rotation:3,x:238.9,y:259},0).wait(1).to({rotation:3.3,x:239.1,y:258.8},0).wait(1).to({rotation:3.5,x:239.3,y:258.6},0).wait(1).to({rotation:3.7,x:239.5,y:258.4},0).wait(1).to({rotation:3.9,x:239.7,y:258.2},0).wait(1).to({rotation:4.1,x:239.8,y:257.9},0).wait(1).to({rotation:4.3,x:240,y:257.7},0).wait(1).to({rotation:4.6,x:240.2,y:257.5},0).wait(1).to({rotation:4.8,x:240.3,y:257.2},0).wait(1).to({rotation:5,x:240.5,y:257.1},0).wait(1).to({rotation:4.8,x:240.3,y:257.2},0).wait(1).to({rotation:4.6,x:240.2,y:257.5},0).wait(1).to({rotation:4.4,x:240,y:257.7},0).wait(1).to({rotation:4.2,x:239.8,y:257.9},0).wait(1).to({rotation:4,x:239.7,y:258.1},0).wait(1).to({rotation:3.8,x:239.5,y:258.3},0).wait(1).to({rotation:3.5,x:239.3,y:258.5},0).wait(1).to({rotation:3.3,x:239.2,y:258.7},0).wait(1).to({rotation:3.1,x:239,y:258.9},0).wait(1).to({rotation:2.9,x:238.8,y:259.1},0).wait(1).to({rotation:2.7,x:238.7,y:259.3},0).wait(1).to({rotation:2.5,x:238.5,y:259.5},0).wait(1).to({rotation:2.3,x:238.3,y:259.8},0).wait(1).to({rotation:2.1,x:238.2,y:259.9},0).wait(1).to({rotation:1.9,x:238,y:260.2},0).wait(1).to({rotation:1.7,x:237.8,y:260.4},0).wait(1).to({rotation:1.5,x:237.6,y:260.6},0).wait(1).to({rotation:1.3,x:237.5,y:260.8},0).wait(1).to({rotation:1,x:237.3,y:261},0).wait(1).to({rotation:0.8,x:237.1,y:261.2},0).wait(1).to({rotation:0.6,x:237,y:261.5},0).wait(1).to({rotation:0.4,x:236.8,y:261.6},0).wait(1).to({rotation:0.2,x:236.7,y:261.8},0).wait(1).to({rotation:0,x:236.5,y:262},0).wait(1));

	// body
	this.instance_1 = new lib.manbody();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-5,473,539);
p.frameBounds = [rect, new cjs.Rectangle(-0.1,-5.3,473.5,539.4), new cjs.Rectangle(-1,-6.5,475.8,540.6), new cjs.Rectangle(-2,-7.7,478,541.8), new cjs.Rectangle(-2.9,-8.9,480.2,543), new cjs.Rectangle(-3.8,-10.1,482.4,544.2), new cjs.Rectangle(-4.8,-11.3,484.6,545.4), new cjs.Rectangle(-5.7,-12.5,486.8,546.5), new cjs.Rectangle(-5.8,-12.9,487.3,547), new cjs.Rectangle(-6.7,-14.1,489.5,548.6), new cjs.Rectangle(-7.6,-15.3,491.7,550.4), new cjs.Rectangle(-8.5,-16.4,493.9,552.4), new cjs.Rectangle(-9.4,-17.6,496,554.3), new cjs.Rectangle(-10.3,-18.8,498.2,556.2), new cjs.Rectangle(-11.2,-19.9,500.3,558), new cjs.Rectangle(-12.1,-21.1,502.5,559.9), new cjs.Rectangle(-12.2,-21.5,502.9,560.3), new cjs.Rectangle(-13,-22.6,505.1,562.1), new cjs.Rectangle(-14,-23.8,507.2,564), new cjs.Rectangle(-14.8,-24.9,509.3,565.8), new cjs.Rectangle(-15.7,-26,511.4,567.7), new cjs.Rectangle(-16.6,-27.2,513.5,569.5), new cjs.Rectangle(-17.4,-28.3,515.6,571.3), new cjs.Rectangle(-18.4,-29.5,517.8,573.2), new cjs.Rectangle(-17.4,-28.3,515.6,571.3), new cjs.Rectangle(-16.6,-27.2,513.5,569.5), new cjs.Rectangle(-15.7,-26.1,511.4,567.7), new cjs.Rectangle(-14.8,-25,509.3,565.9), new cjs.Rectangle(-14,-23.9,507.3,564.1), new cjs.Rectangle(-13.9,-23.6,506.9,563.8), new cjs.Rectangle(-13,-22.3,504.7,561.9), new cjs.Rectangle(-12.1,-21.2,502.6,560.1), new cjs.Rectangle(-11.2,-20.1,500.5,558.2), new cjs.Rectangle(-10.4,-19,498.4,556.3), new cjs.Rectangle(-9.4,-17.8,496.2,554.5), new cjs.Rectangle(-8.5,-16.6,494.1,552.6), new cjs.Rectangle(-8.5,-16.2,493.6,552.2), new cjs.Rectangle(-7.5,-15.1,491.5,550.3), new cjs.Rectangle(-6.7,-13.9,489.3,548.4), new cjs.Rectangle(-5.8,-12.8,487.2,546.8), new cjs.Rectangle(-4.8,-11.6,485,545.7), new cjs.Rectangle(-3.9,-10.4,482.8,544.5), new cjs.Rectangle(-3.8,-10,482.3,544.1), new cjs.Rectangle(-2.9,-8.8,480.2,542.9), new cjs.Rectangle(-2,-7.7,477.9,541.7), new cjs.Rectangle(-1,-6.5,475.7,540.5), new cjs.Rectangle(0,-5.3,473.5,539.4), new cjs.Rectangle(0,-5,473,539)];


(lib.cloud5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(110.5,51,1,1,0,0,0,115.5,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:110.9},0).wait(1).to({x:111.2},0).wait(1).to({x:111.5},0).wait(1).to({x:111.9},0).wait(1).to({x:112.2},0).wait(1).to({x:112.5},0).wait(1).to({x:112.8},0).wait(1).to({x:113.2},0).wait(1).to({x:113.5},0).wait(1).to({x:113.8},0).wait(1).to({x:114.1},0).wait(1).to({x:114.5},0).wait(1).to({x:114.8},0).wait(1).to({x:115.1},0).wait(1).to({x:115.4},0).wait(1).to({x:115.7},0).wait(1).to({x:116.1},0).wait(1).to({x:116.4},0).wait(1).to({x:116.7},0).wait(1).to({x:117},0).wait(1).to({x:117.4},0).wait(1).to({x:117.7},0).wait(1).to({x:118},0).wait(1).to({x:118.3},0).wait(1).to({x:118.7},0).wait(1).to({x:119},0).wait(1).to({x:119.3},0).wait(1).to({x:119.6},0).wait(1).to({x:120},0).wait(1).to({x:120.3},0).wait(1).to({x:120.6},0).wait(1).to({x:120.9},0).wait(1).to({x:121.3},0).wait(1).to({x:121.6},0).wait(1).to({x:121.9},0).wait(1).to({x:122.3},0).wait(1).to({x:122.6},0).wait(1).to({x:122.9},0).wait(1).to({x:123.2},0).wait(1).to({x:123.6},0).wait(1).to({x:123.9},0).wait(1).to({x:124.2},0).wait(1).to({x:124.5},0).wait(1).to({x:124.9},0).wait(1).to({x:125.2},0).wait(1).to({x:125.5},0).wait(1).to({x:125.8},0).wait(1).to({x:126.2},0).wait(1).to({x:126.5},0).wait(1).to({x:126.2},0).wait(1).to({x:125.9},0).wait(1).to({x:125.5},0).wait(1).to({x:125.2},0).wait(1).to({x:124.9},0).wait(1).to({x:124.6},0).wait(1).to({x:124.3},0).wait(1).to({x:123.9},0).wait(1).to({x:123.6},0).wait(1).to({x:123.3},0).wait(1).to({x:123},0).wait(1).to({x:122.7},0).wait(1).to({x:122.3},0).wait(1).to({x:122},0).wait(1).to({x:121.7},0).wait(1).to({x:121.4},0).wait(1).to({x:121.1},0).wait(1).to({x:120.7},0).wait(1).to({x:120.4},0).wait(1).to({x:120.1},0).wait(1).to({x:119.8},0).wait(1).to({x:119.5},0).wait(1).to({x:119.1},0).wait(1).to({x:118.8},0).wait(1).to({x:118.5},0).wait(1).to({x:118.2},0).wait(1).to({x:117.9},0).wait(1).to({x:117.5},0).wait(1).to({x:117.2},0).wait(1).to({x:116.9},0).wait(1).to({x:116.6},0).wait(1).to({x:116.3},0).wait(1).to({x:115.9},0).wait(1).to({x:115.6},0).wait(1).to({x:115.3},0).wait(1).to({x:115},0).wait(1).to({x:114.7},0).wait(1).to({x:114.4},0).wait(1).to({x:114.1},0).wait(1).to({x:113.7},0).wait(1).to({x:113.4},0).wait(1).to({x:113.1},0).wait(1).to({x:112.8},0).wait(1).to({x:112.5},0).wait(1).to({x:112.1},0).wait(1).to({x:111.8},0).wait(1).to({x:111.5},0).wait(1).to({x:111.2},0).wait(1).to({x:110.9},0).wait(1).to({x:110.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5,0,231,102);
p.frameBounds = [rect, new cjs.Rectangle(-4.7,0,231,102), new cjs.Rectangle(-4.3,0,231,102), new cjs.Rectangle(-4,0,231,102), new cjs.Rectangle(-3.7,0,231,102), new cjs.Rectangle(-3.4,0,231,102), new cjs.Rectangle(-3,0,231,102), new cjs.Rectangle(-2.7,0,231,102), new cjs.Rectangle(-2.4,0,231,102), new cjs.Rectangle(-2.1,0,231,102), new cjs.Rectangle(-1.7,0,231,102), new cjs.Rectangle(-1.4,0,231,102), new cjs.Rectangle(-1.1,0,231,102), new cjs.Rectangle(-0.8,0,231,102), new cjs.Rectangle(-0.4,0,231,102), new cjs.Rectangle(-0.1,0,231,102), new cjs.Rectangle(0.2,0,231,102), new cjs.Rectangle(0.6,0,231,102), new cjs.Rectangle(0.9,0,231,102), new cjs.Rectangle(1.2,0,231,102), new cjs.Rectangle(1.5,0,231,102), new cjs.Rectangle(1.9,0,231,102), new cjs.Rectangle(2.2,0,231,102), new cjs.Rectangle(2.5,0,231,102), new cjs.Rectangle(2.8,0,231,102), new cjs.Rectangle(3.2,0,231,102), new cjs.Rectangle(3.5,0,231,102), new cjs.Rectangle(3.8,0,231,102), new cjs.Rectangle(4.1,0,231,102), new cjs.Rectangle(4.5,0,231,102), new cjs.Rectangle(4.8,0,231,102), new cjs.Rectangle(5.1,0,231,102), new cjs.Rectangle(5.4,0,231,102), new cjs.Rectangle(5.8,0,231,102), new cjs.Rectangle(6.1,0,231,102), new cjs.Rectangle(6.4,0,231,102), new cjs.Rectangle(6.8,0,231,102), new cjs.Rectangle(7.1,0,231,102), new cjs.Rectangle(7.4,0,231,102), new cjs.Rectangle(7.7,0,231,102), new cjs.Rectangle(8.1,0,231,102), new cjs.Rectangle(8.4,0,231,102), new cjs.Rectangle(8.7,0,231,102), new cjs.Rectangle(9,0,231,102), new cjs.Rectangle(9.4,0,231,102), new cjs.Rectangle(9.7,0,231,102), new cjs.Rectangle(10,0,231,102), new cjs.Rectangle(10.3,0,231,102), new cjs.Rectangle(10.7,0,231,102), new cjs.Rectangle(11,0,231,102), new cjs.Rectangle(10.7,0,231,102), new cjs.Rectangle(10.4,0,231,102), new cjs.Rectangle(10,0,231,102), new cjs.Rectangle(9.7,0,231,102), new cjs.Rectangle(9.4,0,231,102), new cjs.Rectangle(9.1,0,231,102), new cjs.Rectangle(8.8,0,231,102), new cjs.Rectangle(8.4,0,231,102), new cjs.Rectangle(8.1,0,231,102), new cjs.Rectangle(7.8,0,231,102), new cjs.Rectangle(7.5,0,231,102), new cjs.Rectangle(7.2,0,231,102), new cjs.Rectangle(6.8,0,231,102), new cjs.Rectangle(6.5,0,231,102), new cjs.Rectangle(6.2,0,231,102), new cjs.Rectangle(5.9,0,231,102), new cjs.Rectangle(5.6,0,231,102), new cjs.Rectangle(5.2,0,231,102), new cjs.Rectangle(4.9,0,231,102), new cjs.Rectangle(4.6,0,231,102), new cjs.Rectangle(4.3,0,231,102), new cjs.Rectangle(4,0,231,102), new cjs.Rectangle(3.6,0,231,102), new cjs.Rectangle(3.3,0,231,102), new cjs.Rectangle(3,0,231,102), new cjs.Rectangle(2.7,0,231,102), new cjs.Rectangle(2.4,0,231,102), new cjs.Rectangle(2,0,231,102), new cjs.Rectangle(1.7,0,231,102), new cjs.Rectangle(1.4,0,231,102), new cjs.Rectangle(1.1,0,231,102), new cjs.Rectangle(0.8,0,231,102), new cjs.Rectangle(0.4,0,231,102), new cjs.Rectangle(0.1,0,231,102), new cjs.Rectangle(-0.2,0,231,102), new cjs.Rectangle(-0.5,0,231,102), new cjs.Rectangle(-0.8,0,231,102), new cjs.Rectangle(-1.2,0,231,102), new cjs.Rectangle(-1.5,0,231,102), new cjs.Rectangle(-1.8,0,231,102), new cjs.Rectangle(-2.1,0,231,102), new cjs.Rectangle(-2.4,0,231,102), new cjs.Rectangle(-2.8,0,231,102), new cjs.Rectangle(-3.1,0,231,102), new cjs.Rectangle(-3.4,0,231,102), new cjs.Rectangle(-3.7,0,231,102), new cjs.Rectangle(-4,0,231,102), new cjs.Rectangle(-4.4,0,231,102), new cjs.Rectangle(-4.7,0,231,102), new cjs.Rectangle(-5,0,231,102)];


(lib.cloud4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(112.5,42.5,1,1,0,0,0,112.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:112.2},0).wait(1).to({x:111.9},0).wait(1).to({x:111.6},0).wait(1).to({x:111.2},0).wait(1).to({x:110.9},0).wait(1).to({x:110.6},0).wait(1).to({x:110.3},0).wait(1).to({x:109.9},0).wait(1).to({x:109.6},0).wait(1).to({x:109.3},0).wait(1).to({x:108.9},0).wait(1).to({x:108.6},0).wait(1).to({x:108.3},0).wait(1).to({x:108},0).wait(1).to({x:107.6},0).wait(1).to({x:107.3},0).wait(1).to({x:107},0).wait(1).to({x:106.6},0).wait(1).to({x:106.3},0).wait(1).to({x:106},0).wait(1).to({x:105.7},0).wait(1).to({x:105.3},0).wait(1).to({x:105},0).wait(1).to({x:104.7},0).wait(1).to({x:104.4},0).wait(1).to({x:104},0).wait(1).to({x:103.7},0).wait(1).to({x:103.4},0).wait(1).to({x:103},0).wait(1).to({x:102.7},0).wait(1).to({x:102.4},0).wait(1).to({x:102.1},0).wait(1).to({x:101.7},0).wait(1).to({x:101.4},0).wait(1).to({x:101.1},0).wait(1).to({x:100.7},0).wait(1).to({x:100.4},0).wait(1).to({x:100.1},0).wait(1).to({x:99.8},0).wait(1).to({x:99.4},0).wait(1).to({x:99.1},0).wait(1).to({x:98.8},0).wait(1).to({x:98.5},0).wait(1).to({x:98.1},0).wait(1).to({x:97.8},0).wait(1).to({x:97.5},0).wait(1).to({x:97.1},0).wait(1).to({x:96.8},0).wait(1).to({x:96.5},0).wait(1).to({x:96.2},0).wait(1).to({x:95.8},0).wait(1).to({x:95.5},0).wait(1).to({x:95.2},0).wait(1).to({x:94.8},0).wait(1).to({x:94.5},0).wait(1).to({x:94.2},0).wait(1).to({x:93.9},0).wait(1).to({x:93.5},0).wait(1).to({x:93.2},0).wait(1).to({x:92.9},0).wait(1).to({x:92.5},0).wait(1).to({x:92.9},0).wait(1).to({x:93.2},0).wait(1).to({x:93.6},0).wait(1).to({x:93.9},0).wait(1).to({x:94.2},0).wait(1).to({x:94.6},0).wait(1).to({x:94.9},0).wait(1).to({x:95.3},0).wait(1).to({x:95.6},0).wait(1).to({x:95.9},0).wait(1).to({x:96.3},0).wait(1).to({x:96.6},0).wait(1).to({x:97},0).wait(1).to({x:97.3},0).wait(1).to({x:97.6},0).wait(1).to({x:98},0).wait(1).to({x:98.3},0).wait(1).to({x:98.7},0).wait(1).to({x:99},0).wait(1).to({x:99.3},0).wait(1).to({x:99.7},0).wait(1).to({x:100},0).wait(1).to({x:100.3},0).wait(1).to({x:100.7},0).wait(1).to({x:101},0).wait(1).to({x:101.4},0).wait(1).to({x:101.7},0).wait(1).to({x:102},0).wait(1).to({x:102.4},0).wait(1).to({x:102.7},0).wait(1).to({x:103.1},0).wait(1).to({x:103.4},0).wait(1).to({x:103.7},0).wait(1).to({x:104.1},0).wait(1).to({x:104.4},0).wait(1).to({x:104.8},0).wait(1).to({x:105.1},0).wait(1).to({x:105.4},0).wait(1).to({x:105.8},0).wait(1).to({x:106.1},0).wait(1).to({x:106.4},0).wait(1).to({x:106.8},0).wait(1).to({x:107.1},0).wait(1).to({x:107.5},0).wait(1).to({x:107.8},0).wait(1).to({x:108.1},0).wait(1).to({x:108.5},0).wait(1).to({x:108.8},0).wait(1).to({x:109.2},0).wait(1).to({x:109.5},0).wait(1).to({x:109.8},0).wait(1).to({x:110.2},0).wait(1).to({x:110.5},0).wait(1).to({x:110.9},0).wait(1).to({x:111.2},0).wait(1).to({x:111.5},0).wait(1).to({x:111.9},0).wait(1).to({x:112.2},0).wait(1).to({x:112.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,225,85);
p.frameBounds = [rect, new cjs.Rectangle(-0.3,0,225,85), new cjs.Rectangle(-0.6,0,225,85), new cjs.Rectangle(-0.9,0,225,85), new cjs.Rectangle(-1.3,0,225,85), new cjs.Rectangle(-1.6,0,225,85), new cjs.Rectangle(-1.9,0,225,85), new cjs.Rectangle(-2.2,0,225,85), new cjs.Rectangle(-2.6,0,225,85), new cjs.Rectangle(-2.9,0,225,85), new cjs.Rectangle(-3.2,0,225,85), new cjs.Rectangle(-3.6,0,225,85), new cjs.Rectangle(-3.9,0,225,85), new cjs.Rectangle(-4.2,0,225,85), new cjs.Rectangle(-4.5,0,225,85), new cjs.Rectangle(-4.9,0,225,85), new cjs.Rectangle(-5.2,0,225,85), new cjs.Rectangle(-5.5,0,225,85), new cjs.Rectangle(-5.9,0,225,85), new cjs.Rectangle(-6.2,0,225,85), new cjs.Rectangle(-6.5,0,225,85), new cjs.Rectangle(-6.8,0,225,85), new cjs.Rectangle(-7.2,0,225,85), new cjs.Rectangle(-7.5,0,225,85), new cjs.Rectangle(-7.8,0,225,85), new cjs.Rectangle(-8.1,0,225,85), new cjs.Rectangle(-8.5,0,225,85), new cjs.Rectangle(-8.8,0,225,85), new cjs.Rectangle(-9.1,0,225,85), new cjs.Rectangle(-9.5,0,225,85), new cjs.Rectangle(-9.8,0,225,85), new cjs.Rectangle(-10.1,0,225,85), new cjs.Rectangle(-10.4,0,225,85), new cjs.Rectangle(-10.8,0,225,85), new cjs.Rectangle(-11.1,0,225,85), new cjs.Rectangle(-11.4,0,225,85), new cjs.Rectangle(-11.8,0,225,85), new cjs.Rectangle(-12.1,0,225,85), new cjs.Rectangle(-12.4,0,225,85), new cjs.Rectangle(-12.7,0,225,85), new cjs.Rectangle(-13.1,0,225,85), new cjs.Rectangle(-13.4,0,225,85), new cjs.Rectangle(-13.7,0,225,85), new cjs.Rectangle(-14,0,225,85), new cjs.Rectangle(-14.4,0,225,85), new cjs.Rectangle(-14.7,0,225,85), new cjs.Rectangle(-15,0,225,85), new cjs.Rectangle(-15.4,0,225,85), new cjs.Rectangle(-15.7,0,225,85), new cjs.Rectangle(-16,0,225,85), new cjs.Rectangle(-16.3,0,225,85), new cjs.Rectangle(-16.7,0,225,85), new cjs.Rectangle(-17,0,225,85), new cjs.Rectangle(-17.3,0,225,85), new cjs.Rectangle(-17.7,0,225,85), new cjs.Rectangle(-18,0,225,85), new cjs.Rectangle(-18.3,0,225,85), new cjs.Rectangle(-18.6,0,225,85), new cjs.Rectangle(-19,0,225,85), new cjs.Rectangle(-19.3,0,225,85), new cjs.Rectangle(-19.6,0,225,85), new cjs.Rectangle(-20,0,225,85), new cjs.Rectangle(-19.6,0,225,85), new cjs.Rectangle(-19.3,0,225,85), new cjs.Rectangle(-18.9,0,225,85), new cjs.Rectangle(-18.6,0,225,85), new cjs.Rectangle(-18.3,0,225,85), new cjs.Rectangle(-17.9,0,225,85), new cjs.Rectangle(-17.6,0,225,85), new cjs.Rectangle(-17.2,0,225,85), new cjs.Rectangle(-16.9,0,225,85), new cjs.Rectangle(-16.6,0,225,85), new cjs.Rectangle(-16.2,0,225,85), new cjs.Rectangle(-15.9,0,225,85), new cjs.Rectangle(-15.5,0,225,85), new cjs.Rectangle(-15.2,0,225,85), new cjs.Rectangle(-14.9,0,225,85), new cjs.Rectangle(-14.5,0,225,85), new cjs.Rectangle(-14.2,0,225,85), new cjs.Rectangle(-13.8,0,225,85), new cjs.Rectangle(-13.5,0,225,85), new cjs.Rectangle(-13.2,0,225,85), new cjs.Rectangle(-12.8,0,225,85), new cjs.Rectangle(-12.5,0,225,85), new cjs.Rectangle(-12.2,0,225,85), new cjs.Rectangle(-11.8,0,225,85), new cjs.Rectangle(-11.5,0,225,85), new cjs.Rectangle(-11.1,0,225,85), new cjs.Rectangle(-10.8,0,225,85), new cjs.Rectangle(-10.5,0,225,85), new cjs.Rectangle(-10.1,0,225,85), new cjs.Rectangle(-9.8,0,225,85), new cjs.Rectangle(-9.4,0,225,85), new cjs.Rectangle(-9.1,0,225,85), new cjs.Rectangle(-8.8,0,225,85), new cjs.Rectangle(-8.4,0,225,85), new cjs.Rectangle(-8.1,0,225,85), new cjs.Rectangle(-7.7,0,225,85), new cjs.Rectangle(-7.4,0,225,85), new cjs.Rectangle(-7.1,0,225,85), new cjs.Rectangle(-6.7,0,225,85), new cjs.Rectangle(-6.4,0,225,85), new cjs.Rectangle(-6.1,0,225,85), new cjs.Rectangle(-5.7,0,225,85), new cjs.Rectangle(-5.4,0,225,85), new cjs.Rectangle(-5,0,225,85), new cjs.Rectangle(-4.7,0,225,85), new cjs.Rectangle(-4.4,0,225,85), new cjs.Rectangle(-4,0,225,85), new cjs.Rectangle(-3.7,0,225,85), new cjs.Rectangle(-3.3,0,225,85), new cjs.Rectangle(-3,0,225,85), new cjs.Rectangle(-2.7,0,225,85), new cjs.Rectangle(-2.3,0,225,85), new cjs.Rectangle(-2,0,225,85), new cjs.Rectangle(-1.6,0,225,85), new cjs.Rectangle(-1.3,0,225,85), new cjs.Rectangle(-1,0,225,85), new cjs.Rectangle(-0.6,0,225,85), new cjs.Rectangle(-0.3,0,225,85), new cjs.Rectangle(0,0,225,85)];


(lib.cloud3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(140.5,86,1,1,0,0,0,140.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:139.8},0).wait(1).to({x:139.1},0).wait(1).to({x:138.4},0).wait(1).to({x:137.7},0).wait(1).to({x:137.1},0).wait(1).to({x:136.5},0).wait(1).to({x:136},0).wait(1).to({x:135.4},0).wait(1).to({x:134.9},0).wait(1).to({x:134.4},0).wait(1).to({x:134},0).wait(1).to({x:133.5},0).wait(1).to({x:133.1},0).wait(1).to({x:132.7},0).wait(1).to({x:132.4},0).wait(1).to({x:132},0).wait(1).to({x:131.7},0).wait(1).to({x:131.4},0).wait(1).to({x:131.1},0).wait(1).to({x:130.8},0).wait(1).to({x:130.5},0).wait(1).to({x:130.3},0).wait(1).to({x:130},0).wait(1).to({x:129.8},0).wait(1).to({x:129.6},0).wait(1).to({x:129.4},0).wait(1).to({x:129.2},0).wait(1).to({x:128.9},0).wait(1).to({x:128.7},0).wait(1).to({x:128.6},0).wait(1).to({x:128.7},0).wait(1).to({x:128.9},0).wait(1).to({x:129.1},0).wait(1).to({x:129.3},0).wait(1).to({x:129.5},0).wait(1).to({x:129.7},0).wait(1).to({x:129.8},0).wait(1).to({x:130},0).wait(1).to({x:130.2},0).wait(1).to({x:130.5},0).wait(1).to({x:130.7},0).wait(1).to({x:130.9},0).wait(1).to({x:131.1},0).wait(1).to({x:131.4},0).wait(1).to({x:131.7},0).wait(1).to({x:131.9},0).wait(1).to({x:132.2},0).wait(1).to({x:132.5},0).wait(1).to({x:132.9},0).wait(1).to({x:133.2},0).wait(1).to({x:133.6},0).wait(1).to({x:134},0).wait(1).to({x:134.4},0).wait(1).to({x:134.8},0).wait(1).to({x:135.3},0).wait(1).to({x:135.7},0).wait(1).to({x:136.2},0).wait(1).to({x:136.8},0).wait(1).to({x:137.3},0).wait(1).to({x:137.9},0).wait(1).to({x:138.5},0).wait(1).to({x:139.2},0).wait(1).to({x:139.8},0).wait(1).to({x:140.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,281,172);
p.frameBounds = [rect, new cjs.Rectangle(-0.7,0,281,172), new cjs.Rectangle(-1.4,0,281,172), new cjs.Rectangle(-2.1,0,281,172), new cjs.Rectangle(-2.8,0,281,172), new cjs.Rectangle(-3.4,0,281,172), new cjs.Rectangle(-4,0,281,172), new cjs.Rectangle(-4.5,0,281,172), new cjs.Rectangle(-5.1,0,281,172), new cjs.Rectangle(-5.6,0,281,172), new cjs.Rectangle(-6.1,0,281,172), new cjs.Rectangle(-6.5,0,281,172), new cjs.Rectangle(-7,0,281,172), new cjs.Rectangle(-7.4,0,281,172), new cjs.Rectangle(-7.8,0,281,172), new cjs.Rectangle(-8.1,0,281,172), new cjs.Rectangle(-8.5,0,281,172), new cjs.Rectangle(-8.8,0,281,172), new cjs.Rectangle(-9.1,0,281,172), new cjs.Rectangle(-9.4,0,281,172), new cjs.Rectangle(-9.7,0,281,172), new cjs.Rectangle(-10,0,281,172), new cjs.Rectangle(-10.2,0,281,172), new cjs.Rectangle(-10.5,0,281,172), new cjs.Rectangle(-10.7,0,281,172), new cjs.Rectangle(-10.9,0,281,172), new cjs.Rectangle(-11.1,0,281,172), new cjs.Rectangle(-11.3,0,281,172), new cjs.Rectangle(-11.6,0,281,172), new cjs.Rectangle(-11.8,0,281,172), new cjs.Rectangle(-11.9,0,281,172), new cjs.Rectangle(-11.8,0,281,172), new cjs.Rectangle(-11.6,0,281,172), new cjs.Rectangle(-11.4,0,281,172), new cjs.Rectangle(-11.2,0,281,172), new cjs.Rectangle(-11,0,281,172), new cjs.Rectangle(-10.8,0,281,172), new cjs.Rectangle(-10.7,0,281,172), new cjs.Rectangle(-10.5,0,281,172), new cjs.Rectangle(-10.3,0,281,172), new cjs.Rectangle(-10,0,281,172), new cjs.Rectangle(-9.8,0,281,172), new cjs.Rectangle(-9.6,0,281,172), new cjs.Rectangle(-9.4,0,281,172), new cjs.Rectangle(-9.1,0,281,172), new cjs.Rectangle(-8.8,0,281,172), new cjs.Rectangle(-8.6,0,281,172), new cjs.Rectangle(-8.3,0,281,172), new cjs.Rectangle(-8,0,281,172), new cjs.Rectangle(-7.6,0,281,172), new cjs.Rectangle(-7.3,0,281,172), new cjs.Rectangle(-6.9,0,281,172), new cjs.Rectangle(-6.5,0,281,172), new cjs.Rectangle(-6.1,0,281,172), new cjs.Rectangle(-5.7,0,281,172), new cjs.Rectangle(-5.2,0,281,172), new cjs.Rectangle(-4.8,0,281,172), new cjs.Rectangle(-4.3,0,281,172), new cjs.Rectangle(-3.7,0,281,172), new cjs.Rectangle(-3.2,0,281,172), new cjs.Rectangle(-2.6,0,281,172), new cjs.Rectangle(-2,0,281,172), new cjs.Rectangle(-1.3,0,281,172), new cjs.Rectangle(-0.7,0,281,172), new cjs.Rectangle(0,0,281,172)];


(lib.cloud2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(140.5,86,1,1,0,0,0,140.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:141},0).wait(1).to({x:141.5},0).wait(1).to({x:141.9},0).wait(1).to({x:142.4},0).wait(1).to({x:142.8},0).wait(1).to({x:143.3},0).wait(1).to({x:143.7},0).wait(1).to({x:144.1},0).wait(1).to({x:144.5},0).wait(1).to({x:144.9},0).wait(1).to({x:145.3},0).wait(1).to({x:145.7},0).wait(1).to({x:146.1},0).wait(1).to({x:146.5},0).wait(1).to({x:146.8},0).wait(1).to({x:147.2},0).wait(1).to({x:147.5},0).wait(1).to({x:147.8},0).wait(1).to({x:148.2},0).wait(1).to({x:148.5},0).wait(1).to({x:148.8},0).wait(1).to({x:149.1},0).wait(1).to({x:149.4},0).wait(1).to({x:149.7},0).wait(1).to({x:149.9},0).wait(1).to({x:150.2},0).wait(1).to({x:150.4},0).wait(1).to({x:150.7},0).wait(1).to({x:150.9},0).wait(1).to({x:151.1},0).wait(1).to({x:151.4},0).wait(1).to({x:151.6},0).wait(1).to({x:151.8},0).wait(1).to({x:152},0).wait(1).to({x:152.2},0).wait(1).to({x:152.3},0).wait(1).to({x:152.5},0).wait(1).to({x:152.3},0).wait(1).to({x:152.2},0).wait(1).to({x:152},0).wait(1).to({x:151.8},0).wait(1).to({x:151.6},0).wait(1).to({x:151.4},0).wait(1).to({x:151.2},0).wait(1).to({x:150.9},0).wait(1).to({x:150.7},0).wait(1).to({x:150.4},0).wait(1).to({x:150.2},0).wait(1).to({x:149.9},0).wait(1).to({x:149.7},0).wait(1).to({x:149.4},0).wait(1).to({x:149.1},0).wait(1).to({x:148.8},0).wait(1).to({x:148.5},0).wait(1).to({x:148.2},0).wait(1).to({x:147.8},0).wait(1).to({x:147.5},0).wait(1).to({x:147.2},0).wait(1).to({x:146.8},0).wait(1).to({x:146.5},0).wait(1).to({x:146.1},0).wait(1).to({x:145.7},0).wait(1).to({x:145.3},0).wait(1).to({x:144.9},0).wait(1).to({x:144.5},0).wait(1).to({x:144.1},0).wait(1).to({x:143.7},0).wait(1).to({x:143.3},0).wait(1).to({x:142.8},0).wait(1).to({x:142.4},0).wait(1).to({x:141.9},0).wait(1).to({x:141.5},0).wait(1).to({x:141},0).wait(1).to({x:140.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,281,172);
p.frameBounds = [rect, new cjs.Rectangle(0.5,0,281,172), new cjs.Rectangle(1,0,281,172), new cjs.Rectangle(1.4,0,281,172), new cjs.Rectangle(1.9,0,281,172), new cjs.Rectangle(2.3,0,281,172), new cjs.Rectangle(2.8,0,281,172), new cjs.Rectangle(3.2,0,281,172), new cjs.Rectangle(3.6,0,281,172), new cjs.Rectangle(4,0,281,172), new cjs.Rectangle(4.4,0,281,172), new cjs.Rectangle(4.8,0,281,172), new cjs.Rectangle(5.2,0,281,172), new cjs.Rectangle(5.6,0,281,172), new cjs.Rectangle(6,0,281,172), new cjs.Rectangle(6.3,0,281,172), new cjs.Rectangle(6.7,0,281,172), new cjs.Rectangle(7,0,281,172), new cjs.Rectangle(7.3,0,281,172), new cjs.Rectangle(7.7,0,281,172), new cjs.Rectangle(8,0,281,172), new cjs.Rectangle(8.3,0,281,172), new cjs.Rectangle(8.6,0,281,172), new cjs.Rectangle(8.9,0,281,172), new cjs.Rectangle(9.2,0,281,172), new cjs.Rectangle(9.4,0,281,172), new cjs.Rectangle(9.7,0,281,172), new cjs.Rectangle(9.9,0,281,172), new cjs.Rectangle(10.2,0,281,172), new cjs.Rectangle(10.4,0,281,172), new cjs.Rectangle(10.6,0,281,172), new cjs.Rectangle(10.9,0,281,172), new cjs.Rectangle(11.1,0,281,172), new cjs.Rectangle(11.3,0,281,172), new cjs.Rectangle(11.5,0,281,172), new cjs.Rectangle(11.7,0,281,172), new cjs.Rectangle(11.8,0,281,172), new cjs.Rectangle(12,0,281,172), new cjs.Rectangle(11.8,0,281,172), new cjs.Rectangle(11.7,0,281,172), new cjs.Rectangle(11.5,0,281,172), new cjs.Rectangle(11.3,0,281,172), new cjs.Rectangle(11.1,0,281,172), new cjs.Rectangle(10.9,0,281,172), new cjs.Rectangle(10.7,0,281,172), new cjs.Rectangle(10.4,0,281,172), new cjs.Rectangle(10.2,0,281,172), new cjs.Rectangle(9.9,0,281,172), new cjs.Rectangle(9.7,0,281,172), new cjs.Rectangle(9.4,0,281,172), new cjs.Rectangle(9.2,0,281,172), new cjs.Rectangle(8.9,0,281,172), new cjs.Rectangle(8.6,0,281,172), new cjs.Rectangle(8.3,0,281,172), new cjs.Rectangle(8,0,281,172), new cjs.Rectangle(7.7,0,281,172), new cjs.Rectangle(7.3,0,281,172), new cjs.Rectangle(7,0,281,172), new cjs.Rectangle(6.7,0,281,172), new cjs.Rectangle(6.3,0,281,172), new cjs.Rectangle(6,0,281,172), new cjs.Rectangle(5.6,0,281,172), new cjs.Rectangle(5.2,0,281,172), new cjs.Rectangle(4.8,0,281,172), new cjs.Rectangle(4.4,0,281,172), new cjs.Rectangle(4,0,281,172), new cjs.Rectangle(3.6,0,281,172), new cjs.Rectangle(3.2,0,281,172), new cjs.Rectangle(2.8,0,281,172), new cjs.Rectangle(2.3,0,281,172), new cjs.Rectangle(1.9,0,281,172), new cjs.Rectangle(1.4,0,281,172), new cjs.Rectangle(1,0,281,172), new cjs.Rectangle(0.5,0,281,172), new cjs.Rectangle(0,0,281,172)];


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(140.5,86,1,1,0,0,0,140.5,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:140.8},0).wait(1).to({x:141.2},0).wait(1).to({x:141.5},0).wait(1).to({x:141.8},0).wait(1).to({x:142.2},0).wait(1).to({x:142.5},0).wait(1).to({x:142.8},0).wait(1).to({x:143.2},0).wait(1).to({x:143.5},0).wait(1).to({x:143.8},0).wait(1).to({x:144.2},0).wait(1).to({x:144.5},0).wait(1).to({x:144.8},0).wait(1).to({x:145.2},0).wait(1).to({x:145.5},0).wait(1).to({x:145.8},0).wait(1).to({x:146.2},0).wait(1).to({x:146.5},0).wait(1).to({x:146.8},0).wait(1).to({x:147.2},0).wait(1).to({x:147.5},0).wait(1).to({x:147.8},0).wait(1).to({x:148.2},0).wait(1).to({x:148.5},0).wait(1).to({x:148.8},0).wait(1).to({x:149.2},0).wait(1).to({x:149.5},0).wait(1).to({x:149.8},0).wait(1).to({x:150.2},0).wait(1).to({x:150.5},0).wait(1).to({x:150.2},0).wait(1).to({x:149.8},0).wait(1).to({x:149.5},0).wait(1).to({x:149.1},0).wait(1).to({x:148.8},0).wait(1).to({x:148.4},0).wait(1).to({x:148.1},0).wait(1).to({x:147.7},0).wait(1).to({x:147.4},0).wait(1).to({x:147.1},0).wait(1).to({x:146.7},0).wait(1).to({x:146.4},0).wait(1).to({x:146},0).wait(1).to({x:145.7},0).wait(1).to({x:145.3},0).wait(1).to({x:145},0).wait(1).to({x:144.6},0).wait(1).to({x:144.3},0).wait(1).to({x:143.9},0).wait(1).to({x:143.6},0).wait(1).to({x:143.3},0).wait(1).to({x:142.9},0).wait(1).to({x:142.6},0).wait(1).to({x:142.2},0).wait(1).to({x:141.9},0).wait(1).to({x:141.5},0).wait(1).to({x:141.2},0).wait(1).to({x:140.8},0).wait(1).to({x:140.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,281,172);
p.frameBounds = [rect, new cjs.Rectangle(0.3,0,281,172), new cjs.Rectangle(0.7,0,281,172), new cjs.Rectangle(1,0,281,172), new cjs.Rectangle(1.3,0,281,172), new cjs.Rectangle(1.7,0,281,172), new cjs.Rectangle(2,0,281,172), new cjs.Rectangle(2.3,0,281,172), new cjs.Rectangle(2.7,0,281,172), new cjs.Rectangle(3,0,281,172), new cjs.Rectangle(3.3,0,281,172), new cjs.Rectangle(3.7,0,281,172), new cjs.Rectangle(4,0,281,172), new cjs.Rectangle(4.3,0,281,172), new cjs.Rectangle(4.7,0,281,172), new cjs.Rectangle(5,0,281,172), new cjs.Rectangle(5.3,0,281,172), new cjs.Rectangle(5.7,0,281,172), new cjs.Rectangle(6,0,281,172), new cjs.Rectangle(6.3,0,281,172), new cjs.Rectangle(6.7,0,281,172), new cjs.Rectangle(7,0,281,172), new cjs.Rectangle(7.3,0,281,172), new cjs.Rectangle(7.7,0,281,172), new cjs.Rectangle(8,0,281,172), new cjs.Rectangle(8.3,0,281,172), new cjs.Rectangle(8.7,0,281,172), new cjs.Rectangle(9,0,281,172), new cjs.Rectangle(9.3,0,281,172), new cjs.Rectangle(9.7,0,281,172), new cjs.Rectangle(10,0,281,172), new cjs.Rectangle(9.7,0,281,172), new cjs.Rectangle(9.3,0,281,172), new cjs.Rectangle(9,0,281,172), new cjs.Rectangle(8.6,0,281,172), new cjs.Rectangle(8.3,0,281,172), new cjs.Rectangle(7.9,0,281,172), new cjs.Rectangle(7.6,0,281,172), new cjs.Rectangle(7.2,0,281,172), new cjs.Rectangle(6.9,0,281,172), new cjs.Rectangle(6.6,0,281,172), new cjs.Rectangle(6.2,0,281,172), new cjs.Rectangle(5.9,0,281,172), new cjs.Rectangle(5.5,0,281,172), new cjs.Rectangle(5.2,0,281,172), new cjs.Rectangle(4.8,0,281,172), new cjs.Rectangle(4.5,0,281,172), new cjs.Rectangle(4.1,0,281,172), new cjs.Rectangle(3.8,0,281,172), new cjs.Rectangle(3.4,0,281,172), new cjs.Rectangle(3.1,0,281,172), new cjs.Rectangle(2.8,0,281,172), new cjs.Rectangle(2.4,0,281,172), new cjs.Rectangle(2.1,0,281,172), new cjs.Rectangle(1.7,0,281,172), new cjs.Rectangle(1.4,0,281,172), new cjs.Rectangle(1,0,281,172), new cjs.Rectangle(0.7,0,281,172), new cjs.Rectangle(0.3,0,281,172), new cjs.Rectangle(0,0,281,172)];


(lib._0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AmzJmQhbhagphtQhGjBAAjcQAAk2Byi8QCpkcFiAAQEKAACqCnQBbBbApBtQBGDAAADeQAAE3hxC8QipEZlkAAQkMAAiningAjGliQhGB7gBDbQABHnENAAQEKAAABnhQgBnWkLAAQh/AAhHB6g");
	this.shape.setTransform(71.6,91.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnJJ7QhfhfgrhzIgBgDQhHjEAAjgQAAk9B0jBIACgDQCykrFzAAQEXAACyCwIAAAAQBfBfAsBzQBIDFAADkQAAFBh1DCQiyEml1ABQkaAAiviwgAirlTQhDB1gBDSQABHDDvAGQDsgGAAm9QAAmzjtgFQhuABg9Bqg");
	mask.setTransform(71.6,91.1);

	// Layer_4
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(70.4,-131.2,3.298,1,90,0,0,89.3,199.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:91.5,regY:202,x:67.9,y:-85.2},0).wait(1).to({y:-46.5},0).wait(1).to({y:-7.8},0).wait(1).to({y:30.9},0).wait(1).to({y:69.6},0).wait(1).to({y:108.3},0).wait(1).to({y:147},0).wait(1).to({y:185.8},0).wait(1).to({y:224.5},0).wait(1).to({y:263.2},0).wait(1).to({y:301.9},0).wait(1).to({y:266.5},0).wait(1).to({y:231.1},0).wait(1).to({y:195.7},0).wait(1).to({y:160.3},0).wait(1).to({y:124.8},0).wait(1).to({y:89.4},0).wait(1).to({y:54},0).wait(1).to({y:18.6},0).wait(1).to({y:-16.8},0).wait(1).to({y:-52.2},0).wait(1).to({y:-87.6},0).wait(1).to({y:-123},0).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(4.8,10,133.6,162.2);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.arena4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{index:0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.mark.addEventListener("click", markfn);  
		
		function markfn () {  
			window.open("#mark", "_self");  
		}
		
		this.btn1.addEventListener("click", btn1fn);  
		
		function btn1fn () {  
		     window.open("https://www.fundsyes.com/Account/open_notice.aspx", "_blank");  
		} 
		
		this.btn2.addEventListener("click", btn2fn);  
		
		function btn2fn () {  
		     window.open("https://www.fundsyes.com/Login.aspx", "_blank");  
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// man
	this.mark = new lib.mark();
	this.mark.name = "mark";
	this.mark.parent = this;
	this.mark.setTransform(873.2,409.4,0.488,0.488,0,0,0,20.6,20.6);
	new cjs.ButtonHelper(this.mark, 0, 1, 1);

	this.btn1 = new lib.account();
	this.btn1.name = "btn1";
	this.btn1.parent = this;
	this.btn1.setTransform(512.9,558);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2, false, new lib.account(), 3);

	this.btn2 = new lib.apply();
	this.btn2.name = "btn2";
	this.btn2.parent = this;
	this.btn2.setTransform(762.9,557.4);
	new cjs.ButtonHelper(this.btn2, 0, 1, 2, false, new lib.apply(), 3);

	this.instance = new lib.title2();
	this.instance.parent = this;
	this.instance.setTransform(749.2,320.1,1,1,0,0,0,133.3,-81.8);

	this.instance_1 = new lib.cloud2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(970.8,157.3,0.783,0.783,0,0,0,140.7,86);

	this.instance_2 = new lib.man();
	this.instance_2.parent = this;
	this.instance_2.setTransform(296.1,365.6,1,1,0,0,0,236.7,264.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.btn2},{t:this.btn1},{t:this.mark}]}).wait(1));

	// deco
	this.instance_3 = new lib._0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(743.9,224,1,1,0,0,0,71.7,92);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFA73C").s().p("EhgHAGkIAAtHMDAPAAAIAANHg");
	this.shape.setTransform(598,635.3);

	this.instance_4 = new lib.cloud3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(102.5,432.1,0.676,0.676,0,0,0,140.5,86);

	this.instance_5 = new lib.cloud1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(302.7,113,1,1,0,0,0,140.5,86);

	this.instance_6 = new lib.title();
	this.instance_6.parent = this;
	this.instance_6.setTransform(539,48);

	this.instance_7 = new lib.infobg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(449,27);

	this.instance_8 = new lib.Bitmap1();
	this.instance_8.parent = this;

	this.instance_9 = new lib.light();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1200,0,1,1,0,0,180);

	this.instance_10 = new lib.light();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape},{t:this.instance_3}]}).wait(1));

	// background
	this.instance_11 = new lib.cloud5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1031.9,409.2,1,1,0,0,0,110.5,51);

	this.instance_12 = new lib.cloud4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(555.7,513.9,1,1,0,0,0,112.5,42.5);

	this.instance_13 = new lib.bgwave();
	this.instance_13.parent = this;
	this.instance_13.setTransform(14,12,1,1,0,0,0,14,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(582.7,23.8,1230.5,971.1);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '91810CCE23294AA391D4D150CB2A4ACD',
	width: 1200,
	height: 635,
	fps: 24,
	color: "#EFD797",
	opacity: 1.00,
	manifest: [
		{src:"img/z4fla_atlas_.png", id:"z4fla_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['91810CCE23294AA391D4D150CB2A4ACD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;