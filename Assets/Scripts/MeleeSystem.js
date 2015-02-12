 var Range = 5.0;
 var Axe : Transform;
// var AttackAnimName = "AnimName";
 var damage = 50;
 var Distance:float;
 
 
 function axeRayShoot () {
         var Hit : RaycastHit;
         var DirectionRay = transform.forward;
         Debug.DrawRay(transform.position, DirectionRay * Range, Color.blue);
         Axe.animation.Play("axeSwing");
         if(Physics.Raycast(transform.position, DirectionRay, Hit, Range))
         {
         Distance = Hit.distance;
         Debug.Log(Hit.transform.tag);
         if(Hit.transform.tag == "Enemy")
         {
         Hit.transform.SendMessage("ApplyDamage",damage,SendMessageOptions.DontRequireReceiver);
        //  Hit.collider.GetComponent("Zombie").health = Hit.collider.GetComponent("Zombie").health - damage;
         }else{
         Distance=-1;
         }
         }
 }
 
 function Update () {
 if(Input.GetButtonDown("Fire1")){
 axeRayShoot ();
 }
 }