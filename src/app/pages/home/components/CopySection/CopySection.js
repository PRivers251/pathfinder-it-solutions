import "./CopySection.css"
import { ThumbsDown, ThumbsUP } from "@/svg-icons"

export default function CopySection() {
    return (
<section className='copy-section'>

<div className="copy-section-title">   
<h1>Tech Problems Killing Your Business? I’ll Fix Them—Fast.</h1>
<br/>
<h2>Citronelle & Saraland’s Trusted Tech Support—Get a FREE 15-Minute Checkup Today!</h2>
<br/>
<a href="/" className="cta-button-1">Fix Your IT Problems HERE!</a>
</div> 

<div className="copy-section-content">           
<p className="font-bold">Dear Citronelle or Saraland Business Owner,</p>
<br/>
<br/><p>Let’s talk about <span className="emphatic">what’s stressing you out</span>. Your business relies on technology—your computers, your internet, your ability to get work done. But when things break, it’s a nightmare:</p>

<div className="copy-list">
<div className="copy-list-item"><div className="small-svg">{ThumbsDown}</div><p>Your internet goes down during a busy day, and you can’t process orders. Customers walk away frustrated.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsDown}</div><p>Your computers are so slow that your team takes twice as long to finish simple tasks. Deadlines slip, and you’re losing ground.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsDown}</div><p>Your Wi-Fi keeps dropping, so you’re stuck using your phone’s hotspot just to send an email or take a payment.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsDown}</div><p>A printer stops working, and your staff wastes hours trying to fix it instead of helping customers.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsDown}</div><p>You’re worried someone might hack into your system, putting your customer info—and your reputation—at risk.</p></div>
</div>

<h3>SOUND FAMILIAR?</h3>
<br/><p>If you’re a small or medium-sized business in Citronelle or Saraland, you’ve probably dealt with these headaches. And the worst part? You don’t have the time—or the budget—to deal with tech drama. You just want it to work.</p>
</div>

<div className="copy-section-content">
<p><span className="emphatic">Here’s the reality:</span> every minute your tech is down, you’re losing money. Studies show <span className="emphatic">small businesses lose an average of $137 to $427 per minute</span> when their systems fail (Forbes, 2023). Small businesses on average spend over 12 working days per year just because of technology issues. That’s a customer you can’t serve, a sale you can’t close, or a project you can’t deliver.</p>

<p>And it’s not just about the money. It’s the <span className="emphatic">stress of watching your business stall.</span> The frustration of knowing your competitors are pulling ahead while you’re stuck troubleshooting. You’re working harder than ever, but tech problems keep holding you back.</p>

<p><span className="emphatic">You shouldn’t have to deal with this!</span> Your business deserves better.</p>

<hr/>
<h3>THATS WHERE I COME IN!</h3>
<p>
I’m Patrick Rivers, the guy behind Pathfinder IT Solutions. <span className="emphatic">I’ve spent years fixing tech problems for businesses just like yours</span>—making sure their systems run smoothly so they can focus on what matters: serving customers and growing. I’m a one-man show based right here in North Mobile County, which means you get my full attention. No big call centers, no excuses—just real solutions that work for you.
</p>

<h3>With Pathfinder IT Solutions, you get:</h3>
<div className="copy-list">
<div className="copy-list-item"><div className="small-svg">{ThumbsUP}</div><p>Fast Fixes: Internet down? I’ll get you back online quickly so you don’t lose another customer.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsUP}</div><p>Systems That Work: I’ll speed up your computers and make sure they don’t crash, so your team can get more done without the frustration.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsUP}</div><p>Reliable Connections: No more Wi-Fi dropouts—I’ll make sure your internet stays steady, even on your busiest days.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsUP}</div><p>Peace of Mind: I’ll keep your customer info safe from threats, so you don’t have to worry about a disaster.</p></div>
<div className="copy-list-item"><div className="small-svg">{ThumbsUP}</div><p>Local Support You Can Count On: I’m right here in North Mobile County, so you’re not waiting days for someone to show up. I’ll fix your problems fast—whether it’s a broken printer or a bigger issue.</p></div>
</div>

<hr/>

<div className="copy-section-content">
<p>Here’s my deal for you: I’m offering a FREE 15-Minute Tech Checkup to the first 10 Citronelle and Saraland businesses who call me today. I’ll take a look at your setup, figure out what’s slowing you down, and tell you exactly how to fix it—no cost, no pressure.</p>

<p>But here’s the catch: I can only work with a few businesses at a time. Once those 10 spots are taken, they’re gone. Don’t let tech problems keep costing you—call me now at 251-472-6693 to claim your free checkup.</p>
</div>

</div>
    </section>
    )
}