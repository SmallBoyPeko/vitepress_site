import{_ as e,c as i,o as s,a as o}from"./app.2da79f7a.js";const l="/assets/WeChatf903a2cdf12631278f330b086b4b2fd8.498eaa1c.png",a="/assets/WeChatd288ba57261eae3fef086b7f0abcff78.f6c6d8d9.png",_=JSON.parse('{"title":"Cosmos 详解","description":"cosmos","frontmatter":{"title":"Cosmos 详解","description":"cosmos","aside":false,"date":"2022-07-05T00:00:00.000Z","tags":["区块链"]},"headers":[{"level":2,"title":"区块链现阶段的问题","slug":"区块链现阶段的问题","link":"#区块链现阶段的问题","children":[{"level":3,"title":"开发周期长、技术门槛高","slug":"开发周期长、技术门槛高","link":"#开发周期长、技术门槛高","children":[]},{"level":3,"title":"资源消耗大、交易体验差","slug":"资源消耗大、交易体验差","link":"#资源消耗大、交易体验差","children":[]},{"level":3,"title":"链上扩容难与跨链通信难","slug":"链上扩容难与跨链通信难","link":"#链上扩容难与跨链通信难","children":[]}]},{"level":2,"title":"Cosmos 的解决方案","slug":"cosmos-的解决方案","link":"#cosmos-的解决方案","children":[{"level":3,"title":"Cosmos Hub","slug":"cosmos-hub","link":"#cosmos-hub","children":[]},{"level":3,"title":"Tendermint Core","slug":"tendermint-core","link":"#tendermint-core","children":[]},{"level":3,"title":"Cosmos-SDK","slug":"cosmos-sdk","link":"#cosmos-sdk","children":[]},{"level":3,"title":"基于 Tendermint Core 和 Cosmos-SDK 构建的区块链系统","slug":"基于-tendermint-core-和-cosmos-sdk-构建的区块链系统","link":"#基于-tendermint-core-和-cosmos-sdk-构建的区块链系统","children":[]},{"level":3,"title":"IBC 协议","slug":"ibc-协议","link":"#ibc-协议","children":[]}]}],"relativePath":"posts/Cosmos详解.md"}'),t={name:"posts/Cosmos详解.md"},r=o('<h2 id="区块链现阶段的问题" tabindex="-1">区块链现阶段的问题 <a class="header-anchor" href="#区块链现阶段的问题" aria-hidden="true">#</a></h2><blockquote><p>本文内容主要来自《区块链架构与实现：Cosmos 详解》</p></blockquote><h3 id="开发周期长、技术门槛高" tabindex="-1">开发周期长、技术门槛高 <a class="header-anchor" href="#开发周期长、技术门槛高" aria-hidden="true">#</a></h3><p>比特币网络面临这样的问题，以太坊的出现解决了这一类问题，主要是用 evm 虚拟机和智能合约开发 dapp 的形式来实现去中心化应用</p><h3 id="资源消耗大、交易体验差" tabindex="-1">资源消耗大、交易体验差 <a class="header-anchor" href="#资源消耗大、交易体验差" aria-hidden="true">#</a></h3><p>比特币和以太坊都面临这样的问题，主要是工作量证明（pow）、中本聪共识协议造成的。</p><p>解决办法：可以用权益证明(pos)来替代 pow，用拜占庭容错共识协议(bft)或者实用拜占庭容错（practical Byzantine fault tolerance，PBFT）共识协议来代替中本聪共识协议。</p><h3 id="链上扩容难与跨链通信难" tabindex="-1">链上扩容难与跨链通信难 <a class="header-anchor" href="#链上扩容难与跨链通信难" aria-hidden="true">#</a></h3><p>比如 eth 链上部署了大量的 dapp 应用，都在争抢有限的计算资源。bch 通过增大每个区块的容量来提高链上交易处理速度的方式仅能带来有限的速度提高，eth2.0 的分片来实现链上交易并行处理的方式开发难度大，进展缓慢。所以构建多条链，并且多链通信是一种不错的解决方式。</p><p>跨链通信的 3 种实现机制：散列锁、公证人和中继</p><h2 id="cosmos-的解决方案" tabindex="-1">Cosmos 的解决方案 <a class="header-anchor" href="#cosmos-的解决方案" aria-hidden="true">#</a></h2><p>为每一个区块链应用单独构建一条区块链，使用 IBC 协议来连接所有的区块链，通过 Tendermint Core、Cosmos-SDK 提供了区块链应用的开发框架，自动继承 Tendermint 共识协议以及 PoS 机制</p><h3 id="cosmos-hub" tabindex="-1">Cosmos Hub <a class="header-anchor" href="#cosmos-hub" aria-hidden="true">#</a></h3><p>是第一个基于 Cosmos 构建的区块链，链上资产是 ATOM</p><h3 id="tendermint-core" tabindex="-1">Tendermint Core <a class="header-anchor" href="#tendermint-core" aria-hidden="true">#</a></h3><p>将区块链系统自下而上拆解为 3 层：对等网络通信层、共识协议层以及上层应用层。</p><ol><li><p>对等网络通信层：对等网络通信，确保交易、区块、共识协议的消息能够快速地在整个网络内广播。</p></li><li><p>共识协议层：构建新的区块，并通过共识协议确保全网就区块内容（交易、上层应用状态等）达成共识。</p></li><li><p>上层应用层：根据共识协议层构建的区块，通过 ABCI 与上层应用交互，执行区块中的交易并完成上层应用的状态更新</p></li></ol><blockquote><p>Tendermint Core 中提供了对等网络通信层与共识协议层的实现，并抽象出区块链应用接口（application blockchain interface，ABCI）来完成共识协议层与上层应用层的互动。</p></blockquote><p>使用的共识协议是 Tendermint 共识协议（pbft 共识协议改进而来）</p><h3 id="cosmos-sdk" tabindex="-1">Cosmos-SDK <a class="header-anchor" href="#cosmos-sdk" aria-hidden="true">#</a></h3><p>Tendermint 团队构建了 Cosmos-SDK，实现了区块链场景中一系列的通用功能模块</p><ul><li>基础功能：账户管理与交易处理。</li><li>auth 模块管理系统中的所有账户。</li><li>bank 模块管理链上资产的转移。</li><li>辅助功能：创世区块管理、链上状态一致性检查等。</li><li>genutil 模块管理链的创世区块。</li><li>supply 模块负责链上资产总量的管理。</li><li>crisis 模块负责所有模块的不变量检查的管理。</li><li>params 模块负责所有模块的参数管理。</li><li>链上治理：基于提案的链上治理与网络升级。</li><li>gov 模块负责链上治理机制。</li><li>upgrade 模块负责链的升级。</li><li>PoS：链上资产抵押、链上惩罚和奖励。</li><li>staking 模块管理链上资产抵押。</li><li>slashing 模块负责对验证者的被动作恶行为进行惩罚。</li><li>evidence 模块负责对验证者的主动作恶行为进行惩罚。</li><li>mint 模块负责链上资产的铸造。</li><li>distribution 模块管理区块奖励的分发。</li><li>IBC 协议：基于中继机制的跨链协议。</li><li>ibc/core 模块负责跨链通信功能</li></ul><h3 id="基于-tendermint-core-和-cosmos-sdk-构建的区块链系统" tabindex="-1">基于 Tendermint Core 和 Cosmos-SDK 构建的区块链系统 <a class="header-anchor" href="#基于-tendermint-core-和-cosmos-sdk-构建的区块链系统" aria-hidden="true">#</a></h3><p><img src="'+l+'" alt=""></p><h3 id="ibc-协议" tabindex="-1">IBC 协议 <a class="header-anchor" href="#ibc-协议" aria-hidden="true">#</a></h3><p>IBC 协议是为了跨链而诞生的，是基于中继机制而实现的协议，原理是任意两个希望跨链通信的区块链可以依赖密码学证明技术向对方链证明自身链上发生了特定的事件。两条链之间的网络通信通过中继者（relayer）完成。</p><p><img src="'+a+'" alt=""></p>',27),n=[r];function d(c,h,p,m,u,b){return s(),i("div",null,n)}const f=e(t,[["render",d]]);export{_ as __pageData,f as default};
