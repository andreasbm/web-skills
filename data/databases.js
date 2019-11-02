
export const databasesCollection = {
	name: "Databases & Servers",
	areas: [
		{
			name: "Databases",
			skills: [
				{
					name: "Relational Databases",
					description: {
						text: "Learn about relational databases and how to use them.",
						links: [
							["Wikipedia - Relational database", "https://en.wikipedia.org/wiki/Relational_database"],
							["Relational database", "https://searchdatamanagement.techtarget.com/definition/relational-database"],
							["Everything you need to know about (Relational) Databases", "https://dev.to/lmolivera/everything-you-need-to-know-about-relational-databases-3ejl"],
							["What are relational databases?", "https://computer.howstuffworks.com/question599.htm"],
							["What is a Relational Database Management System?", "https://www.codecademy.com/articles/what-is-rdbms-sql"],
						]
					},
					skills: [
						{
							name: "SQL",
							description: {
								text: "Learn how to write SQL statements to communicate with a database.",
								links: [
									["Learn SQL", "https://www.codecademy.com/learn/learn-sql"],
									["Wikipedia - SQL", "https://en.wikipedia.org/wiki/SQL"],
									["A beginners guide to SQL", "https://learntocodewith.me/posts/sql-guide/"],
									["The Last SQL Guide for Data Analysis You’ll Ever Need", "https://medium.com/better-programming/the-last-sql-guide-for-data-analysis-youll-ever-need-17ae10fa4a6f"],
									["SQL Tutorial", "https://www.tutorialrepublic.com/sql-tutorial/"],
								]
							},
						},
						/*{
							name: "Relational Algebra",
							description: {
								text: "Learn how relational algebra can describe the language used for querying a relational database..",
								links: [
									["Wikipedia - Relational algebra", "https://en.wikipedia.org/wiki/Relational_algebra"],
									["Tutorialspoint - Relational Algebra", "https://www.tutorialspoint.com/dbms/relational_algebra.htm"],
									["Relational Algebra in DBMS with Examples", "https://www.guru99.com/relational-algebra-dbms.html"],
									["Practical reasons behind learning relational algebra", "https://dba.stackexchange.com/questions/111487/what-are-the-practical-reasons-behind-learning-relational-algebra"],
									["Relational algebra calculator?", "https://dbis-uibk.github.io/relax/"],
									["Coursera - Relational Algebra Overview", "https://www.coursera.org/lecture/data-manipulation/relational-algebra-overview-tv5TJ"],
									["Relational Algebra Learning Tool", "https://www.doc.ic.ac.uk/~pjm/teaching/student_projects/pm105_report.pdf"],
								]
							},
						},*/
						{
							name: "MySQL",
							description: {
								text: "Learn about the open-source relational database management system called MySQL.",
								links: [
									["MySQL", "https://www.mysql.com/"],
									["Wikipedia - MySQL", "https://en.wikipedia.org/wiki/MySQL"],
									["Tutorialspoint - MySQL Tutorial", "https://www.tutorialspoint.com/mysql/index.htm"],
									["MySQL Definition", "https://searchoracle.techtarget.com/definition/MySQL"],
									["Getting Started with MySQL", "http://www.mysqltutorial.org/getting-started-with-mysql/"],
								]
							},
						},
						{
							name: "PostgreSQL",
							description: {
								text: "Learn about the open-source relational database management system called PostgreSQL.",
								links: [
									["PostgreSQL", "https://www.postgresql.org/"],
									["Wikipedia - PostgreSQL", "https://en.wikipedia.org/wiki/PostgreSQL"],
									["PostgreSQL Tutorial", "http://www.postgresqltutorial.com/"],
									["Postgres Guide", "http://postgresguide.com/"],
								]
							},
						}
					]
				},
				{
					name: "Non-relational Databases",
					description: {
						text: "Learn about non-relational databases and how to use them.",
						links: [
							["What Is A Non Relational Database", "https://www.mongodb.com/scale/what-is-a-non-relational-database"],
							["Wikipedia - NoSQL", "https://en.wikipedia.org/wiki/NoSQL"],
							["dev.to - Relational SQL vs. Non-Relational NoSQL Databases", "https://dev.to/trevoirwilliams/relational-sql-vs-non-relational-nosql-databases-hi5"],
							["Non-relational data and NoSQL", "https://docs.microsoft.com/en-us/azure/architecture/data-guide/big-data/non-relational-data"],
							["Non-Relational Database", "https://www.techopedia.com/definition/25218/non-relational-database"],
						]
					},
					skills: [
						{
							name: "Redis",
							description: {
								text: "Learn about the open-source non-relational database management system called Redis.",
								links: [
									["Redis", "https://redis.io/"],
									["Try Redis", "http://try.redis.io/"],
									["Wikipedia - Redis", "https://en.wikipedia.org/wiki/Redis"],
									["An introduction to Redis data types and abstractions", "https://redis.io/topics/data-types-intro"],
									["Redis - Documentation", "https://redis.io/documentation"],
									["Redis: What and Why?", "https://codeburst.io/redis-what-and-why-d52b6829813"],
									["Tutorialspoint - Redis Tutorial", "https://www.tutorialspoint.com/redis/index.htm"],
								]
							},
						},
						{
							name: "MongoDB",
							description: {
								text: "Learn about the open-source non-relational database management system called MongoDB.",
								links: [
									["MongoDB", "https://www.mongodb.com/"],
									["MongoDB - Documentation", "https://docs.mongodb.com/"],
									["MongoDB - University", "https://university.mongodb.com/"],
									["Tutorialspoint - MongoDB Tutorial", "https://www.tutorialspoint.com/mongodb/index.htm"],
									["Youtube - MongoDB In 30 Minutes", "https://www.youtube.com/watch?v=pWbMrx5rVBE"],
								]
							},
						}
					]
				},
				{
					name: "Data Modelling",
					description: {
						text: "Learn how data modelling can help your database design.",
						links: [
							["Chapter 5 Data Modelling", "https://opentextbc.ca/dbdesign01/chapter/chapter-5-data-modelling/"],
							["Wikipedia - Database Model", "https://en.wikipedia.org/wiki/Database_model"],
							["Wikipedia - Database Modelling", "https://en.wikipedia.org/wiki/Data_modeling"],
							["What is Data Modelling?", "https://www.guru99.com/data-modelling-conceptual-logical.html"],
							["Data Modeling Definition", "https://searchdatamanagement.techtarget.com/definition/data-modeling"],
						]
					},
					skills: [
						{
							name: "ER Diagram",
							description: {
								text: "Learn how to model your data using ER diagrams.",
								links: [
									["Tutorialspoint - DBMS, Data Models", "https://www.tutorialspoint.com/dbms/dbms_data_models.htm"],
									["Entity Relationship Diagram", "https://www.smartdraw.com/entity-relationship-diagram/"],
									["Youtube - Entity Relationship Diagram Tutorial", "https://www.youtube.com/watch?v=QpdhBUYk7Kk"],
									["Wikipedia - Entity–relationship model", "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model"],
									["Entity Relationship Diagram", "https://beginnersbook.com/2015/04/e-r-model-in-dbms/"],
								]
							},
						},
						{
							name: "Keys",
							description: {
								text: "Learn how to figure out what types of keys to use and where to use them.",
								links: [
									["Introduction to Database Keys", "https://www.studytonight.com/dbms/database-key.php"],
									["7 Different Types of Database Keys", "https://www.csestack.org/different-types-database-keys-example/"],
									["Database Management: Keys", "https://databasemanagement.fandom.com/wiki/Relational_Database:_Keys"],
									["Database Keys", "https://www.tutorialcup.com/dbms/keys.htm"],
									["Youtube - Database Keys", "https://www.youtube.com/watch?v=yMYH0zP1m8U"],
								]
							},
						},
					]
				},
				{
					name: "Indexing",
					description: {
						text: "Learn how to use indexing to speed up your database.",
						links: [
							["Indexing in Databases", "https://www.geeksforgeeks.org/indexing-in-databases-set-1/"],
							["Wikipedia - Database index", "https://en.wikipedia.org/wiki/Database_index"],
							["Database Indexes Explained", "https://www.essentialsql.com/what-is-a-database-index/"],
							["Indexing in Databases with EXAMPLES", "https://www.guru99.com/indexing-in-database.html"],
							["What Does Indexing Do?", "https://chartio.com/learn/databases/how-does-indexing-work/"],
							["An in-depth look at Database Indexing", "https://www.freecodecamp.org/news/database-indexing-at-a-glance-bb50809d48bd/"],
							["Indexing your database data — the easy way", "https://medium.com/faun/explained-indexing-your-database-data-the-easy-way-3c7127ed36a"],
						]
					},
				},
				{
					name: "Data Integrity",
					description: {
						text: "Learn how to assure the accuracy and consistency of data.",
						links: [
							["Wikipedia - Data Integrity", "https://en.wikipedia.org/wiki/Data_integrity"],
							["What is Data Integrity and Why Is It Important?", "https://www.talend.com/resources/what-is-data-integrity/"],
							["hat is Data Integrity?", "https://digitalguardian.com/blog/what-data-integrity-data-protection-101"],
							["What is Data Integrity?", "https://database.guide/what-is-data-integrity/"],
							["Data Integrity", "https://www.tutorialcup.com/dbms/integrity.htm"],
							["Youtube - Database Design, Data Integrity", "https://www.youtube.com/watch?v=1D_h-yFtQVo"],
						]
					},
				},
				{
					name: "Normalization",
					description: {
						text: "Learn how data normalization can help you decrease data redundancy and improve data integrity in your database.",
						links: [
							["Wikipedia - Database normalization", "https://en.wikipedia.org/wiki/Database_normalization"],
							["Database Normalization (Explained in Simple English)", "https://www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/"],
							["What is Normalization?", "https://www.guru99.com/database-normalization.html"],
							["Normal Forms in DBMS", "https://www.geeksforgeeks.org/normal-forms-in-dbms/"],
							["Database normalization", "https://searchsqlserver.techtarget.com/definition/normalization"],
							["Database Normalization Explained", "https://towardsdatascience.com/database-normalization-explained-53e60a494495"],
						]
					},
					skills: [
						{
							name: "Functional Dependencies",
							description: {
								text: "Learn how to find functional dependencies to improve your database design.",
								links: [
									["Full Functional Dependency in Database Normalization", "https://www.lifewire.com/full-functional-dependency-1019753"],
									["Stackoverflow - Functional dependency and normalization", "https://stackoverflow.com/questions/4199444/functional-dependency-and-normalization"],
									["Tutorialspoint - DBMS, Normalization", "https://www.tutorialspoint.com/dbms/database_normalization.htm"],
									["Functional Dependencies and Normalization", "http://www.ict.griffith.edu.au/~jw/normalization/assets/Functional%20Dependencies%20and%20Normalization.pdf"],
									["DBMS Functional Dependency", "https://www.guru99.com/dbms-functional-dependency.html"],
									["Wikipedia - Armstrong's axioms", "https://en.wikipedia.org/wiki/Armstrong%27s_axioms"],
									["Armstrong's Axioms in Functional Dependency", "https://www.includehelp.com/dbms/armstrongs-axioms-in-functional-dependency.aspx"],
								]
							},
						},
						{
							name: "Normal Forms",
							description: {
								text: "Learn how normal forms can help you normalize your database.",
								links: [
									["Wikipedia - Normal forms", "https://en.wikipedia.org/wiki/Database_normalization#Normal_forms"],
									["1NF, 2NF, 3NF and BCNF in Database", "https://beginnersbook.com/2015/05/normalization-in-dbms/"],
									["Chapter 12 Normalization", "https://opentextbc.ca/dbdesign01/chapter/chapter-12-normalization/"],
									["Wikipedia - Boyce–Codd normal form", "https://en.wikipedia.org/wiki/Boyce%E2%80%93Codd_normal_form"],
									["Boyce-Codd Normal Form (BCNF)", "https://www.geeksforgeeks.org/boyce-codd-normal-form-bcnf/"],
									["Wikipedia - Third normal form", "https://en.wikipedia.org/wiki/Third_normal_form"],
								]
							},
						},
					]
				},
				{
					name: "Transactions",
					description: {
						text: "Learn how transactions can group a set of database tasks into a single execution unit.",
						links: [
							["Wikipedia - Database transaction", "https://en.wikipedia.org/wiki/Database_transaction"],
							["Stackoverflow - What is a database transaction?", "https://stackoverflow.com/questions/974596/what-is-a-database-transaction"],
							["Tutorialspoint - DBMS, Transaction", "https://www.tutorialspoint.com/dbms/dbms_transaction.htm"],
							["Why do you need to know transactions?", "http://db4beginners.com/blog/relationaldb-transaction/"],
							["SQL Transactions", "https://www.geeksforgeeks.org/sql-transactions/"],
						]
					},
					skills: [
						{
							name: "ACID",
							description: {
								text: "Learn about the ACID properties of transactions.",
								links: [
									["A beginner’s guide to ACID", "https://vladmihalcea.com/a-beginners-guide-to-acid-and-database-transactions/"],
									["DBMS Transaction Management: ACID Properties", "https://www.guru99.com/dbms-transaction-management.html"],
									["ACID Properties in DBMS", "https://www.geeksforgeeks.org/acid-properties-in-dbms/"],
									["Wikipedia - ACID", "https://en.wikipedia.org/wiki/ACID"],
									["ACID properties of transactions", "https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.4.0/product-overview/acid.html"],
									["A Primer on ACID Transactions", "https://blog.yugabyte.com/a-primer-on-acid-transactions/"],
									["Stackoverflow - How do ACID and database transactions work?", "https://stackoverflow.com/questions/3740280/how-do-acid-and-database-transactions-work"],
								]
							},
						},
						{
							name: "Serializability",
							description: {
								text: "Learn how to determine whether a schedule is serializable and leaves the database in a consistent state.",
								links: [
									["Wikipedia - Serializability", "https://en.wikipedia.org/wiki/Serializability"],
									["Transaction Serializability in DBMS", "https://www.tutorialcup.com/dbms/transaction-serializability.htm"],
									["DBMS Serializability", "https://beginnersbook.com/2018/12/dbms-serializability/"],
									["View Serializability in DBMS Transactions", "https://www.geeksforgeeks.org/view-serializability-in-dbms-transactions/"],
									["Conflict Serializability in DBMS", "https://www.geeksforgeeks.org/conflict-serializability-in-dbms/"],
								]
							},
						},
						{
							name: "Locks",
							description: {
								text: "Learn about locks and when they should be used.",
								links: [
									["Wikipedia - Record locking", "https://en.wikipedia.org/wiki/Record_locking"],
									["Database Locking: What, why and how?", "http://www.methodsandtools.com/archive/archive.php?id=83"],
									["A beginner’s guide to locking and lost updates", "https://vladmihalcea.com/a-beginners-guide-to-database-locking-and-the-lost-update-phenomena/"],
									["Monitoring SQL Database Locks", "https://docs.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/monitor-database-locks"],
									["Implementation of Locking in DBMS", "https://www.geeksforgeeks.org/implementation-of-locking-in-dbms/"],
								]
							},
							skills: [
								{
									name: "Deadlocks",
									description: {
										text: "Learn about deadlocks and why they should be avoided.",
										links: [
											["Deadlock in DBMS", "https://www.geeksforgeeks.org/deadlock-in-dbms/"],
											["Wikipedia - Deadlock", "https://en.wikipedia.org/wiki/Deadlock"],
											["What is a Deadlock?", "https://www.studytonight.com/operating-system/deadlocks"],
											["Oracle - Deadlocks", "https://docs.oracle.com/javadb/10.8.3.0/devguide/cdevconcepts28436.html"],
											["Deadlock Definition", "https://whatis.techtarget.com/definition/deadlock"],
											["Introduction to Deadlock", "https://www.javatpoint.com/os-deadlocks-introduction"],
											["dev.to - Understanding SQL Server Deadlocks", "https://dev.to/integerman/understanding-sql-server-deadlocks-2ej6"],
										]
									},
								},
							]
						},
						{
							name: "Precedence graph",
							description: {
								text: "Learn how to create a precedence graph to test for conflict serializability of a schedule.",
								links: [
									["Wikipedia - Precedence graph", "https://en.wikipedia.org/wiki/Precedence_graph"],
									["Youtube - How to draw a precedence graph", "https://www.youtube.com/watch?v=U3SHusK80q0"],
									["Precedence Graph to check Conflict Serializable Schedule", "https://ashutoshtripathi.com/2017/04/15/how-to-check-conflict-serializability-using-precedence-graph-algorithm/"],
									["Testing for conflict serializablity", "http://www.exploredatabase.com/2017/11/testing-for-conflict-serializablity-using-precedence-graph.html"],
									["Precedence Graph, DBMS", "https://www.includehelp.com/dbms/precedence-graph.aspx"],
								]
							},
						},
					]
				},
			]
		},
		{
			name: "Servers",
			skills: [
				{
					name: "Architectural Models",
					description: {
						text: "Learn about the fundamental architectural server models.",
						links: [
							["Server Architecture", "https://www.techopedia.com/definition/30262/server-architecture"],
							["Youtube - Architectural model", "https://www.youtube.com/watch?v=SKtR7NVxYFA"],
							["Architectural Model", "https://www.sciencedirect.com/topics/computer-science/architectural-model"],
							["Distributed Systems: Models and Design", "http://www2.imm.dtu.dk/courses/02220/2018/L3/Models.pdf"],
						]
					},
					skills: [
						{
							name: "Client-Server",
							description: {
								text: "Learn about the client-server model.",
								links: [
									["Wikipedia - Client-server model", "https://en.wikipedia.org/wiki/Client%E2%80%93server_model"],
									["Client Server Architecture", "https://cio-wiki.org/wiki/Client_Server_Architecture"],
									["Understanding What Client Server Architecture Is All About", "https://freefeast.info/general-it-articles/client-server-architecture/"],
									["Wikipedia - Client-server", "https://simple.wikipedia.org/wiki/Client-server"],
									["Client-server model (client-server architecture)", "https://searchnetworking.techtarget.com/definition/client-server"],
									["Client-Server Model", "https://www.techopedia.com/definition/18321/client-server-model"],
									["Learn more about Client-Server Model", "https://www.sciencedirect.com/topics/computer-science/client-server-model"],
								]
							},
						},
						{
							name: "Proxy Server",
							description: {
								text: "Learn about the proxy-server model.",
								links: [
									["Wikipedia - Proxy Server", "https://en.wikipedia.org/wiki/Proxy_server"],
									["Youtube - What is a Proxy Server?", "https://www.youtube.com/watch?v=5cPIukqXe5w"],
									["What is a Proxy Server and How Does it Work?", "https://www.varonis.com/blog/what-is-a-proxy-server/"],
									["Proxy Server Definition", "https://whatis.techtarget.com/definition/proxy-server"],
									["What is a proxy server?", "https://www.itpro.co.uk/server-storage/30246/what-is-a-proxy-server"],
								]
							},
						},
						{
							name: "Peer-To-Peer",
							description: {
								text: "Learn about the peer-to-peer model.",
								links: [
									["Wikipedia - Peer-to-peer", "https://en.wikipedia.org/wiki/Peer-to-peer"],
									["Youtube - What is a Peer to Peer Network? ", "https://www.youtube.com/watch?v=ie-qRQIQT4I"],
									["What's a Peer-to-Peer (P2P) Network?", "https://www.computerworld.com/article/2588287/networking-peer-to-peer-network.html"],
									["Peer-to-peer (P2P)", "https://searchnetworking.techtarget.com/definition/peer-to-peer"],
									["Make a P2P connection in 10 minutes", "https://dev.to/carloslfu/make-a-p2p-connection-in-10-minutes-4b32"],
								]
							},
						},
					]
				},
				{
					name: "Middleware",
					description: {
						text: "Learn about middleware.",
						links: [
							["Wikipedia - Middleware", "https://en.wikipedia.org/wiki/Middleware"],
							["Middleware Definition", "https://searchapparchitecture.techtarget.com/definition/middleware"],
							["Quora - Why is Middleware important?", "https://www.quora.com/Why-is-Middleware-important"],
							["What is middleware?", "https://www.redhat.com/en/topics/middleware/what-is-middleware"],
							["What is Middleware? Technology’s Go-to Middleman", "https://www.talend.com/resources/what-is-middleware/"],
						]
					},
				},
				{
					name: "Request-Reply Protocol",
					description: {
						text: "Learn how computers communicate with eachother using the request-reply protocol.",
						links: [
							["Wikipedia - Request Response", "https://en.wikipedia.org/wiki/Request%E2%80%93response"],
							["Youtube - Event-Driven Architecture", "https://www.youtube.com/watch?v=3bxAm3XIFmk"],
							["Request/Reply", "https://solace.com/samples/solace-samples-jms/request-reply/"],
							["Enterprise Integration - Request-Reply", "http://www.informit.com/articles/article.aspx?p=1398616&seqNum=4"],
						]
					},
					skills: [
						{
							name: "UDP",
							description: {
								text: "Learn about the UDP transport layer protocol.",
								links: [
									["UDP (User Datagram Protocol)", "https://searchnetworking.techtarget.com/definition/UDP-User-Datagram-Protocol"],
									["Wikipedia - User Datagram Protocol", "https://en.wikipedia.org/wiki/User_Datagram_Protocol"],
									["User Datagram Protocol (UDP)", "https://www.techopedia.com/definition/13460/user-datagram-protocol-udp"],
									["Youtube - Explained! UDP and TCP", "https://www.youtube.com/watch?v=1LYqtkgtSPU"],
									["User Datagram Protocol", "https://www.geeksforgeeks.org/user-datagram-protocol-udp/"],
								]
							},
						},
						{
							name: "TCP",
							description: {
								text: "Learn about the TCP transport layer protocol.",
								links: [
									["TCP (Transmission Control Protocol)", "https://searchnetworking.techtarget.com/definition/TCP"],
									["Wikipedia - Transmission Control Protocol", "https://en.wikipedia.org/wiki/Transmission_Control_Protocol"],
									["TCP/IP (Transmission Control Protocol/Internet Protocol)", "https://searchnetworking.techtarget.com/definition/TCP-IP"],
									["Services and Segment structure in TCP", "https://www.geeksforgeeks.org/services-and-segment-structure-in-tcp/"],
									["TCP and UDP in Transport Layer", "https://www.geeksforgeeks.org/tcp-and-udp-in-transport-layer/"],
								]
							},
						},
					]
				},
				{
					name: "REST API",
					description: {
						text: "Learn how an API can be designed to be RESTful.",
						links: [
							["Wikipeia - Representational state transfer", "https://en.wikipedia.org/wiki/Representational_state_transfer"],
							["Learn REST: A RESTful Tutorial", "https://www.restapitutorial.com/"],
							["Youtube - REST API concepts and examples", "https://www.youtube.com/watch?v=7YcW25PHnAA"],
							["REST API Tutorial", "https://restfulapi.net/"],
							["What is a REST API?", "https://www.mulesoft.com/resources/api/what-is-rest-api-design"],
						]
					},
					skills: [
						{
							name: "CRUD",
							description: {
								text: "Learn about the CRUD operations.",
								links: [
									["Wikipedia - Create, read, update and delete", "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"],
									["Codecademy - What is CRUD?", "https://www.codecademy.com/articles/what-is-crud"],
									["What is the Difference between REST and CRUD?", "https://www.bmc.com/blogs/rest-vs-crud-whats-the-difference/"],
									["Youtube - Introduction to CRUD Operations", "https://www.youtube.com/watch?v=Lyi8SoVdkhM"],
									["REST was NEVER about CRUD", "https://tyk.io/rest-never-crud/"],
								]
							},
						},
					]
				},
				{
					name: "Express",
					description: {
						text: "Learn about the Node.js web application framework called Express.",
						links: [
							["Express", "https://expressjs.com/"],
							["Tutorialspoint - Express Framework", "https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm"],
							["Youtube - Express.js & Node.js Course for Beginners", "https://www.youtube.com/watch?v=G8uL0lFFoN0"],
							["Understanding Node.js & Express.js fundamentals", "https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1"],
							["Wikipedia - Express.js", "https://en.wikipedia.org/wiki/Express.js"],
						]
					},
				},
				{
					name: "GraphQL",
					description: {
						text: "Learn how to use the GraphQL query language.",
						links: [
							["GraphQL", "https://graphql.org/"],
							["Youtube - Introduction to GraphQL", "https://www.youtube.com/watch?v=Y0lDGjwRYKw"],
							["Github - GraphQL Specification", "https://github.com/graphql/graphql-spec"],
							["The Fullstack Tutorial for GraphQL", "https://www.howtographql.com/"],
						]
					},
				},
				{
					name: "GNU/Linux",
					description: {
						text: "Learn about the GNU/Linux operating system",
						links: [
							["Linux and the GNU System", "https://www.gnu.org/gnu/linux-and-gnu.en.html"],
							["Wikipedia - GNU/Linux naming controversy", "https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy"],
							["What is GNU/Linux?", "https://www.debian.org/releases/stable/amd64/ch01s02.en.html"],
							["GNU Linux", "https://searchdatacenter.techtarget.com/definition/GNU-Linux"],
						]
					},
				},
				{
					name: "Docker",
					description: {
						text: "Learn how to use Docker.",
						links: [
							["Docker", "https://www.docker.com/"],
							["Wikipedia - Docker (software)", "https://en.wikipedia.org/wiki/Docker_(software)"],
							["Docker for beginners", "https://docker-curriculum.com/"],
							["What is Docker?", "https://opensource.com/resources/what-docker"],
							["Get Started, Part 1: Orientation and setup", "https://docs.docker.com/get-started/"],
						]
					},
				},
				{
					name: "SSH",
					description: {
						text: "Learn how to use SSH and learn how to connect to a device using an SSH client.",
						links: [
							["Wikipedia - Secure Shell", "https://en.wikipedia.org/wiki/Secure_Shell"],
							["Secure Shell (SSH)", "https://searchsecurity.techtarget.com/definition/Secure-Shell"],
							["SSH command in Linux with Examples", "https://www.geeksforgeeks.org/ssh-command-in-linux-with-examples/"],
							["How to Establish a Connection Using SSH", "https://help.ubnt.com/hc/en-us/articles/218850057-Intro-to-Networking-How-to-Establish-a-Connection-Using-SSH"],
						]
					},
				}
			]
		}
	]
}