# AI Affiliate Marketing Automation Platform

## 1. Project Overview

Built a modern full-stack web application called **TrendAffiliate AI**.

The application is an AI-powered affiliate marketing automation platform focused primarily on the **United States market**.

The platform should:

1. Discover trending and potentially profitable products in the US market.
2. Analyze each product's popularity, competition, pricing, affiliate potential and trend direction.
3. Allow the user to add affiliate links for selected products.
4. Automatically generate marketing content using Gemini AI.
5. Generate images and short-form video concepts/content where possible.
6. Connect Facebook, Instagram and YouTube accounts using official OAuth/API integrations.
7. Schedule and automatically publish content.
8. Track the performance of every product and every published post.
9. Show whether each product is gaining or losing momentum.
10. Provide a centralized dashboard showing the complete affiliate marketing operation.
11. Operate automatically on a daily schedule while allowing the user to approve content before publication if desired.

The application should be designed as a **real SaaS-quality application**, not merely a prototype UI.

---

# 2. Primary User

The initial application is for a single affiliate marketer.

Design the architecture so that it can later support:

* Multiple users
* Multiple brands
* Multiple affiliate networks
* Multiple Facebook pages
* Multiple Instagram accounts
* Multiple YouTube channels
* Multiple niches

For the MVP, implement a single-user/admin experience with an architecture that can be extended to multi-user SaaS.

---

# 3. Core Concept

The application should operate as this automated pipeline:

```text
TREND DISCOVERY
       ↓
PRODUCT ANALYSIS
       ↓
OPPORTUNITY SCORE
       ↓
PRODUCT SELECTION
       ↓
AFFILIATE LINK
       ↓
AI CONTENT GENERATION
       ↓
CONTENT APPROVAL / AUTO APPROVAL
       ↓
SCHEDULING
       ↓
SOCIAL MEDIA PUBLISHING
       ↓
ENGAGEMENT / CLICK TRACKING
       ↓
SALES / COMMISSION DATA
       ↓
PERFORMANCE ANALYSIS
       ↓
AI RECOMMENDATIONS
       ↓
NEXT CONTENT
```

The system should continuously learn from historical performance.

---

# 4. Main Dashboard

Create a professional SaaS dashboard.

Use a clean modern interface with:

* Dark/light mode
* Responsive desktop/tablet/mobile layout
* Left sidebar navigation
* Top notification area
* Global search
* Date-range selector
* US market indicator
* AI activity indicator

## Dashboard KPI cards

Display:

### Revenue

* Estimated revenue
* Confirmed affiliate revenue
* Revenue today
* Revenue this week
* Revenue this month

### Traffic

* Affiliate clicks
* CTR
* Landing page visits
* Social traffic

### Content

* Posts published
* Posts scheduled
* Posts awaiting approval
* Failed posts

### Products

* Products monitored
* Trending products
* Rising products
* Declining products
* Products requiring attention

### Social Media

* Facebook reach
* Instagram reach
* YouTube views
* Total engagement
* Follower growth

---

# 5. Trending Products Discovery

Create a page called:

## "Trending Products"

The system should identify products that are currently gaining interest in the US.

Create a product discovery engine that can consume data from configurable sources/APIs.

Potential data sources should include:

* Google Trends-compatible data source
* Product/search trend APIs
* Affiliate network APIs
* Retailer product APIs
* Amazon-related data where legally/API-accessible
* eBay APIs
* Walmart APIs where available
* Other approved product/trend data providers

Do not scrape websites in ways that violate their terms.

Create an abstraction layer called:

```text
TrendProvider
```

and:

```text
ProductProvider
```

so providers can be added later.

---

# 6. Product Opportunity Score

Every product should receive an AI-generated opportunity score.

Do NOT simply create a random score.

Calculate the score from measurable signals.

Example:

```text
Trend Momentum        25%
Search Interest       20%
Competition           15%
Affiliate Commission  15%
Price/Conversion      10%
Social Engagement     10%
Seasonality            5%
```

Show:

```text
Opportunity Score: 87/100

Trend:        ↑ Rising
Competition:  Medium
Demand:       High
Commission:   High
Social Buzz:  Very High
```

The exact weights must be configurable from Settings.

---

# 7. Product Card

Each product should have a rich card.

Example:

```text
----------------------------------------
Product Image

Portable Mini Projector

Opportunity Score       87
Trend                    ↑ Rising
US Demand                High
Competition              Medium

Price                    $49.99
Affiliate Commission     8%
Estimated Commission     $4.00

Trend Change             +34%
Social Mentions          +61%

[View Product]
[Add Affiliate Link]
[Track Product]
[Create Content]
----------------------------------------
```

Buttons:

* View Details
* Add Affiliate Link
* Generate Content
* Track
* Schedule
* Ignore
* Favorite

---

# 8. Product Detail Page

Clicking a product should open a detailed analytics page.

Show:

## Product information

* Product name
* Brand
* Category
* Description
* Price
* Previous price
* Discount
* Retailer
* Product URL
* Affiliate URL
* Product image
* Product availability

## Trend analysis

Create charts for:

* 7-day trend
* 30-day trend
* 90-day trend

Show trend direction:

```text
↑ Strongly Rising
↑ Rising
→ Stable
↓ Declining
↓↓ Strongly Declining
```

## AI analysis

Generate:

### Why is this trending?

### Who is buying it?

### What problem does it solve?

### Why might people share it?

### What content should be created?

### What social platform is best for it?

### Potential risks

### Recommended posting frequency

---

# 9. Product Lifecycle Tracking

Every product should have a lifecycle.

Statuses:

```text
DISCOVERED
↓
ANALYZING
↓
WATCHLIST
↓
PROMISING
↓
ACTIVE
↓
HIGH PERFORMER
↓
DECLINING
↓
ARCHIVED
```

Store historical snapshots.

For every product track:

* Trend score
* Search interest
* Affiliate clicks
* Social impressions
* Engagement
* Conversion
* Revenue
* Content count
* Best-performing platform

This allows the dashboard to answer:

> "How is this product progressing?"

---

# 10. Product Progress Chart

Create a dedicated visualization.

Example:

```text
Product Momentum

100 |                         ●
 90 |                    ●
 80 |                ●
 70 |            ●
 60 |       ●
 50 |   ●
    --------------------------------
     Day1 Day5 Day10 Day15 Day20
```

Overlay:

* Trend score
* Social engagement
* Affiliate clicks
* Revenue

Allow switching metrics.

---

# 11. Affiliate Link Management

Create an Affiliate Links section.

Fields:

```text
Product
Network
Merchant
Original URL
Affiliate URL
Commission %
Cookie Duration
Price
Status
```

Support multiple affiliate links per product.

Example:

```text
Portable Projector

Amazon
Commission: 4%
Status: Active

eBay
Commission: 3%
Status: Active

Other Network
Commission: 10%
Status: Active
```

Allow the user to select which affiliate link is used for each platform.

---

# 12. Link Tracking

Every generated post should use a trackable redirect URL.

Example:

```text
/go/projector-001
```

The redirect system should record:

* Click
* Timestamp
* Product
* Campaign
* Platform
* Post
* Country
* Device
* Referrer

Do not collect unnecessary personal information.

Dashboard:

```text
Clicks Today       147
Instagram           62
Facebook            51
YouTube             34
```

---

# 13. Social Media Connections

Create a page:

# Social Accounts

Cards:

```text
Facebook
[Connect Facebook]

Instagram
[Connect Instagram]

YouTube
[Connect YouTube]
```

Use official OAuth flows.

Never request or store social-media passwords.

Store OAuth credentials/tokens securely on the server.

Implement token expiration detection and reconnect functionality.

---

# 14. Facebook Integration

Create an official Facebook/Meta integration layer.

Capabilities should include, where supported by the authenticated account and approved API permissions:

* Connect account
* Select Facebook Page
* Publish text/image content
* Publish supported video content
* Schedule posts where supported
* Retrieve post identifiers
* Retrieve available engagement metrics
* Detect publishing errors

Provide:

```text
Facebook Page
Connection Status
Last Published
Posts Today
Reach
Engagement
Clicks
```

If a requested API capability is unavailable because of platform permissions or API limitations, display a clear message instead of pretending that it worked.

---

# 15. Instagram Integration

Create an official Instagram integration.

Where supported by the account type and API permissions:

* Connect Instagram
* Select account
* Publish image content
* Publish supported video/Reels content
* Retrieve post ID
* Retrieve available insights
* Track engagement
* Track affiliate clicks

Dashboard:

```text
Instagram

Followers
Reach
Likes
Comments
Shares
Saves
Clicks
```

---

# 16. YouTube Integration

Create a YouTube OAuth integration.

Capabilities:

* Connect YouTube
* Select channel
* Upload videos
* Set title
* Set description
* Set tags
* Set thumbnail
* Set privacy
* Schedule publishing when supported
* Retrieve video ID
* Retrieve available statistics
* Track views
* Track engagement

Important:

Use the official YouTube Data API.

Handle upload processing states:

```text
Uploading
Processing
Ready
Published
Failed
```

Do not assume that an upload is immediately publicly visible.

---

# 17. Content Generation Engine

Create an AI Content Studio.

The user can select:

```text
Product
Platform
Content Type
Tone
Target Audience
Call To Action
```

Content types:

### Facebook

* Promotional post
* Educational post
* Product comparison
* Problem/solution
* Deal post

### Instagram

* Feed caption
* Reel script
* Carousel copy
* Story copy

### YouTube

* Short script
* Long-form script
* Title
* Description
* Tags
* CTA

---

# 18. Gemini AI Integration

Use the Gemini API for:

* Product analysis
* Trend interpretation
* Content generation
* Hook generation
* Caption generation
* Script generation
* Hashtag suggestions
* SEO titles
* Product comparison
* Content repurposing
* Performance analysis
* Daily recommendations

Keep the Gemini API key on the server side.

Never expose the API key in browser/client-side code.

Use structured JSON responses for AI-generated content.

Example:

```json
{
  "hook": "",
  "caption": "",
  "cta": "",
  "hashtags": [],
  "content_angle": "",
  "target_audience": "",
  "recommended_platform": ""
}
```

---

# 19. AI Content Variations

For every selected product, generate multiple angles.

Example:

### Angle 1

Problem → Solution

### Angle 2

"3 reasons people are buying this"

### Angle 3

Product demonstration

### Angle 4

Comparison

### Angle 5

Deal/discount

### Angle 6

"Things I wish I knew before buying"

Avoid generating repetitive content.

The AI should maintain a content history to prevent duplicate or near-duplicate posts.

---

# 20. AI Image Generation

Where image generation is available, allow the system to generate marketing visuals.

Examples:

* Product lifestyle image
* Social media advertisement
* Product feature graphic
* Comparison graphic
* Promotional banner
* Instagram Reel cover
* YouTube thumbnail

Do not falsely represent generated images as actual product photography.

If the product image is supplied by an affiliate retailer, respect the retailer/network's image usage rules.

---

# 21. Short-Form Video Generation

Create a video generation pipeline.

For each product:

```text
Product
↓
AI Script
↓
Scene Plan
↓
Visual Assets
↓
Voiceover
↓
Captions
↓
Vertical Video
↓
Platform Formatting
```

Target:

```text
Instagram Reels
Facebook Reels
YouTube Shorts
```

Default format:

```text
1080 × 1920
9:16
```

Allow:

* 15 seconds
* 30 seconds
* 45 seconds
* 60 seconds

The first MVP can create a video storyboard and reusable video asset pipeline even if final video generation is initially mocked.

---

# 22. Content Calendar

Create a visual calendar.

Example:

```text
MON     TUE     WED     THU     FRI     SAT     SUN

IG      FB      YT      IG      FB      YT      IG
9 AM    11 AM   7 PM    10 AM   12 PM   6 PM    9 AM
```

Each scheduled content item should show:

* Product
* Platform
* Content type
* Status
* Publish time

Statuses:

```text
Draft
AI Generated
Awaiting Approval
Approved
Scheduled
Publishing
Published
Failed
```

---

# 23. Autonomous Daily Marketing

Create an automation engine.

The user can enable:

```text
AUTOMATIC MODE
```

Settings:

```text
Daily Products: 3

Facebook Posts: 1/day
Instagram Posts: 1/day
Instagram Reels: 1/day
YouTube Shorts: 1/day
```

The AI should automatically:

1. Scan trending products.
2. Update existing products.
3. Detect rising products.
4. Select suitable products.
5. Generate content.
6. Check content for duplication.
7. Check affiliate link availability.
8. Create campaign tracking URLs.
9. Schedule content.
10. Publish through connected APIs.
11. Collect performance data.
12. Analyze results.
13. Adjust future recommendations.

---

# 24. Human Approval Mode

Do NOT make automation irreversible.

Provide:

```text
Automation Mode

○ Manual
○ AI Draft + Approval
● Fully Automatic
```

In AI Draft + Approval mode:

```text
AI generated 5 posts

[Approve All]
[Review]
[Reject]
```

Fully Automatic mode should still respect:

* Platform API limits
* OAuth permissions
* Content safety
* Affiliate disclosure requirements
* Duplicate-content prevention
* User-defined posting limits

---

# 25. Daily AI Marketing Report

Every morning create a report:

# Daily Affiliate Intelligence

### Trending Products

1. Product A
2. Product B
3. Product C

### Yesterday's Performance

Revenue:
$XX

Clicks:
XXX

Posts:
XX

Best Platform:
Instagram

### Best Product

Product Name

Trend:
↑ 32%

Clicks:
245

Revenue:
$42

### AI Recommendation

Explain why the system recommends continuing, changing the content angle, increasing/decreasing posting frequency, or moving a product to watchlist.

---

# 26. Performance Dashboard

Create analytics pages for:

## Product Performance

Columns:

```text
Product
Trend
Posts
Impressions
Clicks
CTR
Conversions
Revenue
Growth
Status
```

## Content Performance

```text
Post
Platform
Product
Published
Reach
Engagement
Clicks
CTR
Revenue
```

## Platform Performance

Compare:

```text
Facebook
Instagram
YouTube
```

Metrics:

* Followers
* Reach
* Views
* Engagement
* Clicks
* CTR
* Revenue

Do not create an overall "best platform" ranking unless the user explicitly configures a metric. Instead show the underlying metrics and trends.

---

# 27. Product Comparison

Allow selecting up to 5 products.

Show:

```text
                 Product A Product B Product C

Trend              ↑         ↑↑        →
Demand             High      Very High Medium
Competition        Medium    High      Low
Commission         5%        8%        10%
Clicks             450       320       210
Revenue            $80       $95       $54
```

Provide AI-generated factual analysis based on available data.

---

# 28. AI Recommendation Center

Create:

# AI Marketing Assistant

The assistant should answer questions such as:

```text
What products are gaining momentum?

Which products should I create content for today?

Which products are declining?

Which posts generated the most clicks?

Which content angles are performing?

What should I publish tomorrow?

Why are clicks falling?

Which products have not received content recently?
```

The assistant must base answers on actual application data.

Do not invent statistics.

---

# 29. Alerts

Create an alert system.

Examples:

```text
🔥 Product momentum increased 42%

⚠ Product clicks declined 25%

💰 Product generated $50 commission

📈 Instagram Reel reached 10,000 views

⚠ Affiliate link appears inactive

⚠ YouTube token needs reconnection

⚠ Facebook publishing failed
```

Allow email/in-app notifications later.

---

# 30. Settings

Create settings sections:

### General

* Market
* Currency
* Time zone
* Default language

Default:

```text
Market: United States
Currency: USD
```

### Automation

* Automatic mode
* Posts/day
* Maximum posts/platform/day
* Approval mode
* Minimum opportunity score
* Minimum trend score

### AI

* AI model
* Content tone
* Brand voice
* Default CTA
* Content length

### Social

* Facebook connection
* Instagram connection
* YouTube connection

### Affiliate

* Affiliate networks
* Default tracking parameters
* Disclosure text

---

# 31. Affiliate Disclosure

Every promotional content workflow must support an affiliate disclosure.

Create configurable default text such as:

```text
This post may contain affiliate links. If you purchase through a link, we may earn a commission at no additional cost to you.
```

Allow the user to customize the disclosure.

The disclosure should be automatically added according to the platform/content format where appropriate.

---

# 32. Database Design

Use a relational database architecture.

Core tables:

```text
users

social_accounts

affiliate_networks

affiliate_links

products

product_prices

product_trends

product_metrics

product_snapshots

content

content_variants

content_assets

campaigns

scheduled_posts

published_posts

social_metrics

affiliate_clicks

affiliate_conversions

daily_reports

automation_settings

notifications

ai_recommendations
```

---

# 33. Product Schema

Example:

```text
Product

id
name
brand
category
description
source_url
affiliate_url
image_url
price
currency
commission_rate
trend_score
opportunity_score
competition_score
demand_score
status
first_detected_at
last_updated_at
created_at
```

---

# 34. Trend Snapshot Schema

```text
ProductTrend

id
product_id
date
trend_score
search_interest
social_mentions
price
competition_score
momentum
source
created_at
```

This allows historical charts.

---

# 35. Content Schema

```text
Content

id
product_id
platform
content_type
title
caption
script
hashtags
affiliate_url
tracking_url
asset_url
status
scheduled_at
published_at
created_at
```

---

# 36. Security

Implement:

* Secure authentication
* Server-side API keys
* OAuth
* Encrypted social tokens
* Environment variables
* Role-based access
* CSRF protection
* Input validation
* Rate limiting
* Secure database access
* Audit logs

Never place:

```text
GEMINI_API_KEY
Facebook secrets
Instagram secrets
Google OAuth secrets
```

inside frontend JavaScript.

Google AI Studio's current Build environment supports server-side secrets for Gemini integrations, so use that architecture.

---

# 37. API Architecture

Use modular API services.

Example:

```text
/api/products
/api/trends
/api/affiliate
/api/content
/api/social
/api/facebook
/api/instagram
/api/youtube
/api/analytics
/api/automation
/api/reports
/api/ai
```

Create service classes:

```text
TrendService
ProductService
AffiliateService
ContentService
AIContentService
SocialPublishingService
AnalyticsService
AutomationService
```

Social publishing should use provider adapters:

```text
SocialProvider
   |
   ├── FacebookProvider
   ├── InstagramProvider
   └── YouTubeProvider
```

This makes additional networks possible later.

---

# 38. Background Jobs

The application needs scheduled/background jobs.

Examples:

```text
scanTrendingProducts()
updateProductTrends()
calculateOpportunityScores()
generateDailyContent()
schedulePosts()
publishScheduledContent()
collectSocialMetrics()
collectAffiliateClicks()
generateDailyReport()
detectDecliningProducts()
refreshOAuthTokens()
```

Do not rely on the browser being open for scheduled automation.

Use server-side scheduled jobs/background workers.

---

# 39. Automation Safety

The autonomous engine must have hard limits.

Example:

```text
MAX_POSTS_PER_DAY = 10

MAX_SAME_PRODUCT_POSTS_PER_DAY = 2

MIN_OPPORTUNITY_SCORE = 70
```

These values must be configurable.

If an API rejects a post:

```text
Do not continuously retry.

Record failure.

Wait using exponential backoff.

Notify user.

```

---

# 40. Content Quality Protection

Before publishing, run an AI/content validation pipeline.

Check:

* Duplicate content
* Spam-like wording
* Unsupported claims
* Fake reviews
* Fake scarcity
* Misleading discounts
* Unsupported product claims
* Missing affiliate disclosure
* Broken affiliate link
* Excessive hashtags
* Platform character limits

If validation fails:

```text
DO NOT PUBLISH
```

Send the content back to the editor.

---

# 41. Dashboard Design

Use a premium SaaS visual style.

Suggested design:

```text
Background:
#0B1020

Cards:
#111827

Primary:
#6366F1

Success:
#10B981

Warning:
#F59E0B

Danger:
#EF4444
```

Use:

* Rounded cards
* Subtle shadows
* Clean charts
* Modern typography
* Large KPI numbers
* Responsive tables
* Interactive graphs

Avoid an overly colorful or cluttered interface.

---

# 42. Sidebar Navigation

Create:

```text
Dashboard

Discover
  ├── Trending Products
  ├── Product Watchlist
  └── Product Categories

Affiliate
  ├── Affiliate Links
  ├── Campaigns
  └── Clicks

Content
  ├── AI Content Studio
  ├── Content Library
  └── Calendar

Social
  ├── Facebook
  ├── Instagram
  └── YouTube

Analytics
  ├── Products
  ├── Content
  ├── Social
  └── Revenue

AI Assistant

Automation

Reports

Settings
```

---

# 43. Dashboard Example

The main dashboard should look approximately like:

```text
------------------------------------------------------------
 TrendAffiliate AI                 US Market 🇺🇸   ● Active
------------------------------------------------------------

 $428.50             4,820              12.4K
 Revenue             Clicks             Engagement
 +24%                +18%               +31%

------------------------------------------------------------

 PRODUCT MOMENTUM

 Portable Projector       ↑ 42%       87/100
 Smart Kitchen Gadget    ↑ 31%       82/100
 Mini Security Camera    ↑ 18%       78/100

------------------------------------------------------------

 TODAY'S CONTENT

 Instagram Reel          Scheduled    10:00 AM
 Facebook Post           Published    11:00 AM
 YouTube Short           Scheduled     7:00 PM

------------------------------------------------------------

 PERFORMANCE

 Revenue      ███████████████
 Clicks       ███████████████████
 Engagement   █████████████████████

------------------------------------------------------------

 AI RECOMMENDATIONS

 "3 products have experienced significant momentum
 during the last 7 days."

 [View Recommendations]
------------------------------------------------------------
```

---

# 44. MVP Implementation Strategy

Build the project in phases.

## Phase 1 — Core Dashboard

Implement:

* Authentication
* Dashboard
* Product database
* Product cards
* Product details
* Trend charts
* Opportunity scoring
* Watchlist
* Affiliate links

Use realistic mock data initially if external APIs are not configured.

---

## Phase 2 — Gemini AI

Implement:

* Product analysis
* Content generation
* AI assistant
* Product recommendations
* Daily reports
* Content validation

---

## Phase 3 — Social OAuth

Implement:

* Facebook OAuth
* Instagram OAuth
* YouTube OAuth
* Account management
* Token management

---

## Phase 4 — Publishing

Implement:

* Content scheduling
* Facebook publishing
* Instagram publishing
* YouTube uploads
* Publishing logs
* Error handling

---

## Phase 5 — Analytics

Implement:

* Social metrics
* Affiliate clicks
* Revenue
* Product lifecycle
* Content performance
* Historical charts

---

## Phase 6 — Autonomous Marketing

Implement:

```text
Trend discovery
→ Product selection
→ Content generation
→ Validation
→ Scheduling
→ Publishing
→ Analytics
→ AI optimization
```

---

# 45. Demo Mode

Because external API credentials may not be available during initial development, create a **Demo Mode**.

Demo Mode should simulate:

* 30 products
* Trend changes
* Product prices
* Affiliate commissions
* Social posts
* Clicks
* Engagement
* Revenue
* Product lifecycle
* Daily AI recommendations

Clearly label demo data:

```text
DEMO DATA
```

Never mix fake/demo metrics with real production metrics.

---

# 46. Real API Configuration

Create a configuration page:

```text
Integrations

Gemini API
[Connected]

Facebook
[Not Connected]

Instagram
[Not Connected]

YouTube
[Not Connected]

Trend Provider
[Not Configured]

Affiliate Network
[Not Configured]
```

Do not hard-code API credentials.

Use environment variables/secrets.

---

# 47. Error Handling

Every external API operation must return structured errors.

Example:

```json
{
  "success": false,
  "provider": "youtube",
  "error_code": "AUTH_EXPIRED",
  "message": "YouTube authorization has expired.",
  "action": "Reconnect account"
}
```

Display useful human-readable errors in the dashboard.

---

# 48. Important Platform Constraints

The application must never pretend an operation succeeded.

For example:

```text
Publishing requested
       ↓
API request
       ↓
Success → Published

Failure → Failed
          ↓
          Reason
          ↓
          Retry/Resolve
```

For YouTube specifically, uploading through the API requires authorization, and uploaded videos can remain private for unverified API projects until the required verification/audit process is completed. Build the UI so this state is clearly represented rather than hiding it.

---

# 49. AI Agent Architecture

Create an internal AI agent called:

**Affiliate Growth Agent**

Its responsibilities:

```text
MONITOR
ANALYZE
CREATE
SCHEDULE
PUBLISH
MEASURE
LEARN
```

The agent should not directly bypass platform permissions.

It should call internal application tools such as:

```text
search_products()
get_product_trends()
analyze_product()
generate_content()
validate_content()
create_tracking_link()
schedule_post()
publish_post()
get_social_metrics()
get_affiliate_metrics()
generate_report()
```

Use structured tool/function calls where appropriate.

---

# 50. AI Agent Decision Logic

Example:

```text
IF trend_score >= 80
AND opportunity_score >= 75
AND affiliate_link_active = true
AND product_not_overposted = true

THEN

Generate content.

IF content_validation = PASS

THEN

Schedule content.

ELSE

Send to review queue.
```

For declining products:

```text
IF trend_score decreases > 25%
FOR 7 consecutive days

THEN

Set status = DECLINING

Reduce automatic content frequency.

Ask AI to determine whether the decline is temporary or persistent.
```

---

# 51. Revenue Attribution

Track the journey:

```text
Product
 ↓
Campaign
 ↓
Content
 ↓
Social Platform
 ↓
Tracking URL
 ↓
Click
 ↓
Conversion
 ↓
Commission
```

The analytics system should make it possible to answer:

> Which product + platform + content generated this revenue?

---

# 52. Future Expansion

Design the architecture so these can be added later:

* TikTok
* Pinterest
* X
* LinkedIn
* Reddit
* Shopify
* WooCommerce
* More affiliate networks
* Email marketing
* Landing page builder
* AI voiceovers
* AI video generation
* Automated blogs
* SEO monitoring
* Google Search Console
* Google Analytics
* Multi-user SaaS
* Subscription billing

Do not implement all of these in the MVP.

---

# 53. Critical Requirement

Do not build a fake dashboard.

Where real integrations are unavailable:

```text
Use Demo Mode.
```

When credentials/API access are available:

```text
Use real API data.
```

Clearly distinguish:

```text
REAL DATA
DEMO DATA
```

Never generate fake revenue, clicks or social metrics and present them as real.

---

# 54. Final User Experience

The final application should allow the user to do this:

```text
1. Login

2. Connect:
   Facebook
   Instagram
   YouTube

3. Select:
   US Market

4. Set:
   3 products/day

5. Enable:
   Automatic Mode

6. AI scans trending products.

7. AI identifies promising products.

8. User adds affiliate links.

9. AI creates:
   Facebook post
   Instagram post
   Instagram Reel
   YouTube Short

10. System validates content.

11. System schedules/publishes content.

12. System tracks:
   Views
   Reach
   Engagement
   Clicks
   Conversions
   Revenue

13. AI analyzes performance.

14. Dashboard shows:
   Product momentum
   Content performance
   Revenue
   Trend changes

15. Next day the AI automatically creates
    the next content cycle.
```

---

# 55. Development Instruction for Google AI Studio

Start by building the application in **Demo Mode with realistic seed data**.

Do not wait for external API credentials.

Build the complete UI, database schema, service architecture and automation architecture first.

Then create integration interfaces for:

```text
Gemini
Facebook
Instagram
YouTube
Trend Providers
Affiliate Providers
```

Use mock implementations where credentials are unavailable.

Make the application production-oriented and modular.

Do not put secrets in frontend code.

Do not use fake successful API responses once a real provider is configured.

Every integration must have:

```text
Connect
Disconnect
Connection Status
Last Sync
Last Error
Reconnect
```

The application should be visually polished, responsive and usable from the first launch.

---

# 56. First Build Task

Start with:

1. Application shell
2. Sidebar
3. Dashboard
4. Product discovery page
5. Product detail page
6. Product lifecycle chart
7. Affiliate link manager
8. Content studio
9. Content calendar
10. Social account connection UI
11. Analytics
12. Automation settings
13. AI Assistant
14. Demo data engine

After completing these, verify navigation and data flow before implementing external social APIs.
