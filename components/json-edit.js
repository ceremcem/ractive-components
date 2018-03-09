Ractive.components['json-edit'] = Ractive.extend({
  template: `<textarea style="white-space: pre-wrap">{{ objFormatted }}</textarea>`,
  isolated: true,
  computed: {
    objFormatted: {
      get: function(){
        var that;
        if (that = this.get('objTmp')) {
          return that;
        } else {
          return JSON.stringify(this.get('value'), null, 2);
        }
      },
      set: function(objStr){
        var obj, e, fixedJSON;
        try {
            fixedJSON = objStr.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
          obj = JSON.parse(fixedJSON);
          this.set('value', obj);
          this.set('objTmp', null);
          return
        } catch (e$) {
          e = e$;
          return this.set('objTmp', objStr);
        }
      }
    }
  }
});
