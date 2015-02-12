var rotationSpeed = 3; //speed of turning
// var target:Transform;
 //var myTransform : Transform; //current transform data of this enemy
 //var isNotDead : boolean = true;
 var health : int = 100;
 var moveSpeed:float;
 
/* function Awake()
 {
     myTransform = transform; //cache transform data for easy access/preformance
 }
 
 
 function Start()
 {
      target = GameObject.FindWithTag("Player").transform; //target the player
 
 }
 */
 function Update () {
     
     if(health < 1){
     
         isNotDead = false;
        // animation.Play("die");
         Destroy(gameObject);
     }
     
   /*  if(isNotDead){
     
         //rotate to look at the player
         myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
         Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
     
     
         
         var distance = Vector3.Distance(target.position, myTransform.position);
         if (distance < 3.0f) {
           //  animation.Play("attack1");
         }
         else{   
             //move towards the player
                myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
            //    animation.Play("walk1");
         }
 
     }*/
 }
 
 function ApplyDamage(dmg : int){
 
     health -= dmg;
 
 }