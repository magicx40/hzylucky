import React from "react";
import './article.scss';

export default class GettysburgAddress extends React.Component {
    render() {
        return (
            <article className="article_common">
                <header>
                    <h1 title="葛底斯堡演说">Gettysburg Address</h1>
                    <p className="author" title="美国总统 亚伯拉罕·林肯">U.S. President Abraham Lincoln</p>
                </header>
                <section>
                    <p>Four score and seven years ago our fathers brought forth upon this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.</p>
                    <p>八十七年前，我们的父辈们在这块陆地上建起了一个新的国家，它孕育于自由，并奉行人人生而平等的主张。</p>
                    <p>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.</p>
                    <p>如今，我们正在进行一场伟大的内战，考验着那个国家，或任何有此信仰和主张的国家，能否长久地存续下去。我们在这场战争的伟大战场上相遇，为了使那一国家得以存续，我们将在这片战场上找到我们最后的安息之地，——那些为此而死去的人已经这么做了，——这对我们而言是恰当的，也是适宜的。</p>
                    <p>But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.</p>
                    <p>然而，从更广泛的意义上说，我们无法在此祭奠，我们无法在此奉献，我们无法使这片土地得以神圣化；那些活着的人，和死去的人，曾在此拼搏过的，已经使它神圣化，而这一意义是我们乏弱的力量远远不能有所增减的。世界不会注意到，也不会长久地记住我们在这儿说过什么，但它绝不会忘记那些人曾在这儿做过什么。虽然大业尚未完竟，但那些为此奋斗过的烈士们已使这一事业进入了最后的成熟阶段，无疑，我们这活着的人当继续致力于这一事业。我们应当投身于那留在我们面前的伟大任务——从那些为此投入了全部热忱的逝者那里，我们将获得更多的热忱；我们将不会，绝不会使那些为此献出生命的人白白献出生命；我们将使这个国家，在上帝的庇佑下，从自由里获得新生；而那一为民所有、为民所治、为民所享的政府，也绝不会从这片土地上消亡。</p>
                </section>
            </article>
        )
    }
}