---
title: 'Difference between semaphore, mutex & spinlock?'
date: '2009-03-16T19:17:00+00:00'
status: publish
author: nbmaiti
excerpt: ''
type: post
id: 171
categories:
    - PROGRAMMING
post_format: []
blogger_blog:
    - engineernabendu.blogspot.com
blogger_author:
    - Nabendu
blogger_permalink:
    - /2009/03/difference-between-semaphore-mutex.html
blogger_internal:
    - /feeds/4948109321544571569/posts/default/7942659802135356892
slug: /2009/03/16/difference-between-semaphore-mutex-spinlock
tags: 
    - kernel
    - os
---
`Semaphores` in Linux are sleeping locks. Because they cause a task to sleep on contention, instead of spin, they are used in situations where the lock-held time may be long.Conversely, since they have the overhead of putting a task to sleep and subsequently waking it up, they should not be used where the lock-held time is short. Since they sleep, however, they can be used to synchronize user contexts  
whereas spinlocks cannot. In other words, it is safe to block while holding a semaphore. A “mutex” (or “mutual exclusion lock”) is a signal that two or more asynchronous processes can use to reserve a shared resource for exclusive use. The first process that obtains ownership of the `mutex` also obtains ownership of the shared resource. Other processes must wait for for the first process to release it’s ownership of the `mutex` before they may attempt to obtain it.

The most common locking primitive in the kernel is the spinlock. The spinlock is a very simple single-holder lock.If a process attempts to acquire a spinlock and it is unavailable, the process will keep trying (spinning) until it can acquire the lock. This simplicity creates a small and fast lock.

Spinlock keeps process spinning instead of sleeping so spinlock can only used   
when :  
1. no sleep permitted in routine  
2. critical section is short,so spin is less costly than task pending.  
3. no other work.

During spin lock holding thread should not be preempted or blocked.

