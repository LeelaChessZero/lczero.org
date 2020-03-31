+++
title = "Training server is down"
slug = "training-server-is-down"
published = 2019-05-17T19:36:00+02:00
author = "crem"
tags = []
draft = true
+++

**2019-05-26 UPDATE:** Temporary server is up again.  
 **  
** **2019-05-25** **UPDATE2:** Turns out cloud instance was preemtable, so it
was preempted, no training again for now.  
 **  
** **2019-05-25** **UPDATE:** We've been donated a temporary AWS cloud
instance for the time of the main server downtime! Training is back up, but
only for test53, test40 is still paused.  
 **  
** **2019-05-23** **UPDATE:** PSU seems to be in order, replugging all cables
didn't help. The person who has access to the server has to travel again, no
news expected until next week. :-(  
 **  
** **2019-05-20** **UPDATE:** The server doesn't react to a power button, so
it's not something trivial. Will take a more thorough look tomorrow.  
 **  
** **2019-05-17** **UPDATE:** The person who has access to the server is
currently travelling, until Sunday. That means that updated information about
the server is expected in the beginning of the next week.  
 **  
**\--- original message ---

As many of you heard, the training of Lc0 has been suspended yesterday.

Here is a short summary what's happened.

 **(context)**  
In April 2018 when we were looking for a training server, one of our
contributors kindly volunteered to help and provided 3 servers (with middle-
class GPUs), together than a space to cost them and covering the electricity
bills.

In May 2018 we croudfunded and bought another server (with two GTX 1080ti,
which were high end consumer GPUs at that time), and located it at the same
place. Since then it have been our training server.  
 **(/end of context)**

Yesterday, May 16 2019, our training server went offline (three other servers
are online, but they are too weak to be useful), ~~and so far we have not been
able to reach the person who hosts it~~.

We don't know what happened to that machine (it's likely that just reboot
would help, or maybe there's some part to replace, or maybe it's something
more serious).  
 ~~We also don't know how long will it take to reach to the person who can
take a look.~~

 **FAQ**  
 **Q: Why not to move training to cloud service?**

 **A:** Several reasons:

  1. We had our own server, and it was just fine.
  2. It takes time to set up (so if we choose this option, or decide to buy a 
new machine and put to some other place, it will take up to a few days to bring 
it online).
  3. It is expensive (at least $600/months a the configuration that we need), 
and we are trying to stay away from accounting.
