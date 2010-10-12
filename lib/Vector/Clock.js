Class('Vector.Clock', {
    
    /*VERSION,*/
    
    
    use : [  ],
    
    
    has : {
        
        clientID        : { 
            is              : 'rw',
            required        : true
        },
        
        // in fact, an Object 
        vector          : Joose.I.Object
    },
    
        
    methods : {
        
        initialize : function () {
            this.vector[ this.getClientID() ] = 0
        },
        
        
        bump    : function () {
            this.vector[ this.getClientID() ]++
        },
        
        
        send : function () {
            return vector
        },
        
        
        receive : function (vector) {
        },
        
        
        each : function (func, scope) {
            Joose.O.each(this.vector, func, scope)
        },
        
        
        compareWith : function () {
            
            return //-1 0 1 NaN?
        }
    }

})