# Security Specification - TrendAffiliate AI

## Data Invariants
1. A `Product` must have a valid name and trend score.
2. `Content` must be associated with a valid `Product`.
3. `SocialAccount` tokens must only be accessible by the account owner.
4. `Clicks` can be logged by anyone but only read by the platform admin (for this MVP, the single user).
5. Users can only modify their own settings and profiles.

## The Dirty Dozen Payloads

1. **Identity Spoofing**: Attempting to create a product with a different `userId` if that field existed (using `request.auth.uid` as source of truth).
2. **Resource Poisoning**: Creating a product with a 1MB string as the name.
3. **State Shortcutting**: Updating a `Content` item status from `draft` directly to `published` without going through `scheduled` (if logic enforced it).
4. **Shadow field injection**: Adding an `isAdmin: true` field to a `User` document.
5. **PII Leak**: An unauthenticated user attempting to `get` a `User` document.
6. **Cross-User Data Access**: User A attempting to `list` User B's `SocialAccount` tokens.
7. **Orphaned Content**: Creating `Content` for a `productId` that does not exist.
8. **Malicious Click Logging**: Flooding the `clicks` collection with junk IDs.
9. **Trend Tampering**: Attempting to update a `ProductTrend` snapshot (should be immutable).
10. **Unauthorized Reporting**: Creating a `DailyReport` as a non-admin.
11. **Token Theft**: Reading the `accessToken` of another user's `SocialAccount`.
12. **Future Timestamp Spoofing**: Setting `createdAt` to a future date instead of `request.time`.

## Test Runner Plan
I will implement `firestore.rules` and verify them using the `deploy_firebase` tool. Since I cannot run a full test suite with `firestore.rules.test.ts` in this environment easily, I will rely on rigorous manual review and the ESLint plugin.
