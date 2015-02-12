 var target : Transform;
 var enemySightDistance = 20.0;
 var enemyHearingDistance = 10.0;
 var rotationSpeed = 3.0;
 var moveSpeed = 4.0;
 var maxAttackDistance = 0.0;
 private var myPosition : Transform;
 
 private var isPlayerDetected : boolean = false;
 private var isEnemyStanding : boolean = false;
 
 function Awake()
 {
     myPosition = transform;
 }
 
 function Start()
 {
     var go = GameObject.FindGameObjectWithTag("Player");
     
     target = go.transform;
     
     maxAttackDistance = 2.0;
 }
 
 function Update()
 {
     if ( !isPlayerDetected ) // means if ( isPlayerDetected == false )
     {
         WatchForPlayer();
         ListenForPlayer();
     }
     else if ( isEnemyStanding ) // means if ( isEnemyStanding == true )
     {
         FollowPlayer();
     }
 }
 
 function WatchForPlayer()
 {
     var dir : Vector3 = (target.transform.position - transform.position).normalized;
     var direction = Vector3.Dot(dir, transform.forward);
     
     if(Vector3.Distance(target.position, myPosition.position) < enemySightDistance && direction > 0)
     {
         PlayerDetected();
        // animation.Play("get_up");
     }
 }
 
 function ListenForPlayer()
 {
     if(Vector3.Distance(target.position, myPosition.position) < enemyHearingDistance)
     {
         PlayerDetected();
       //  animation.Play("get_up");
     }
 }
 
 function PlayerDetected()
 {
     isPlayerDetected = true;
     
     yield WaitForSeconds(1.5);
     
     isEnemyStanding = true;    
     
 }
 
 function FollowPlayer()
 {
 animation.Play("walking_1");
     Debug.DrawLine(target.position, myPosition.position, Color.red);
     
     myPosition.rotation = Quaternion.Slerp(myPosition.rotation, Quaternion.LookRotation(target.position - myPosition.position), rotationSpeed * Time.deltaTime);
     
     if (Vector3.Distance(target.position, myPosition.position) > maxAttackDistance)
     {
         myPosition.position += myPosition.forward * moveSpeed * Time.deltaTime;
     }
 }