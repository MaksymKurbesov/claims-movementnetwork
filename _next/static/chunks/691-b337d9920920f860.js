(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [691],
  {
    43718: function () {},
    88445: function () {},
    76123: function () {},
    39201: function () {},
    59525: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 96474));
    },
    96474: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return B;
        },
      });
      var l = s(19979),
        a = s(7933),
        i = s(40009),
        n = s(70312),
        r = s(66875);
      function c(e) {
        return (0, l.jsx)("div", {
          id: "ip-modal",
          className: "modal open ".concat(e.wider ? "wider" : ""),
          children: (0, l.jsxs)("div", {
            className: "inner",
            children: [
              e.children,
              (0, l.jsx)("button", {
                className: "close-modal",
                onClick: e.onClose,
                children: (0, l.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "9",
                  height: "9",
                  viewBox: "0 0 9 9",
                  fill: "none",
                  children: (0, l.jsx)("path", {
                    d: "M1 1L8.5 8.5M8.5 1L1 8.5",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var o = s(37673);
      function d() {
        return (0, l.jsx)("span", { className: "spinner-loader" });
      }
      var h = (e) => {
        let { setDetails: t } = e,
          { connectAsync: s, connectors: h } = (0, a.$)(),
          { signMessageAsync: u } = (0, i.Q)(),
          { address: g, isConnected: f } = (0, n.m)(),
          { disconnect: j } = (0, r.q)(),
          [w, v] = (0, o.useState)(!1),
          [p, A] = (0, o.useState)(!1),
          [y, b] = (0, o.useState)(null),
          [N, E] = (0, o.useState)(!1),
          [L, C] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          f && N && _();
        }, [f, N]);
        let k = async () => {
            b(null), f && j(), v(!0), E(!1);
          },
          _ = async () => {
            try {
              b(null);
              let e = await fetch("/api/get-nonce", { cache: "no-store" }),
                { nonce: s } = await e.json(),
                l =
                  "Please sign this message to confirm ownership. nonce: ".concat(
                    s,
                  );
              if (!g) throw Error("Failed to retrieve connected address");
              let a = await u({ message: l });
              A(!0),
                t({ address: g, message: l, signature: a, nonce: s }),
                A(!1);
            } catch (e) {
              b(e.message || "An error occurred"),
                console.error("Error connecting wallet:", e),
                A(!1);
            }
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "flex gap-10 items-center",
              children: [
                (0, l.jsx)("button", {
                  className: "btn open interact-button",
                  onClick: () => null,
                  children: "Connect EVM Wallet",
                }),
                p ? (0, l.jsx)(d, {}) : null,
                y &&
                  (0, l.jsx)("p", { className: "error-message", children: y }),
              ],
            }),
            w &&
              (0, l.jsx)(c, {
                onClose: () => v(!1),
                children: (0, l.jsx)("div", {
                  className: "wallet-selector-modal",
                  children: (0, l.jsxs)("div", {
                    className: "modal-content",
                    children: [
                      (0, l.jsx)("h2", { children: "Select a Wallet" }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-4 my-4",
                        children: [
                          (0, l.jsx)(x, {
                            connectors: h,
                            onConnect: async (e) => {
                              try {
                                await s({ connector: e }), v(!1), E(!0);
                              } catch (a) {
                                var t, l;
                                if (
                                  (null == a
                                    ? void 0
                                    : null === (t = a.message) || void 0 === t
                                      ? void 0
                                      : t.includes("already connected")) ||
                                  (null == a
                                    ? void 0
                                    : null === (l = a.message) || void 0 === l
                                      ? void 0
                                      : l.includes("already processing"))
                                )
                                  try {
                                    await j(),
                                      await s({ connector: e }),
                                      v(!1),
                                      E(!0);
                                  } catch (e) {
                                    console.error("Error during retry:", e);
                                  }
                                else
                                  console.error("Error connecting wallet:", a);
                              }
                            },
                          }),
                          (0, l.jsxs)("button", {
                            onClick: () => C(!L),
                            className:
                              "flex items-center justify-left gap-2 mt-4",
                            children: [
                              "More Wallets",
                              (0, l.jsx)("span", {
                                className:
                                  "transform transition-transform ".concat(
                                    L ? "rotate-180" : "",
                                  ),
                                children: "↓",
                              }),
                            ],
                          }),
                          L &&
                            (0, l.jsx)("div", {
                              className: "mt-4 border-t pt-4",
                              children: h
                                .filter((e) => "OKX Wallet" !== e.name)
                                .map((e) =>
                                  (0, l.jsx)(
                                    m,
                                    {
                                      connector: e,
                                      onClick: async () => {
                                        try {
                                          await j(),
                                            await s({ connector: e }),
                                            v(!1),
                                            E(!0);
                                        } catch (a) {
                                          var t, l;
                                          if (
                                            (null == a
                                              ? void 0
                                              : null === (t = a.message) ||
                                                  void 0 === t
                                                ? void 0
                                                : t.includes(
                                                    "already connected",
                                                  )) ||
                                            (null == a
                                              ? void 0
                                              : null === (l = a.message) ||
                                                  void 0 === l
                                                ? void 0
                                                : l.includes(
                                                    "already processing",
                                                  ))
                                          )
                                            try {
                                              await j(),
                                                await s({ connector: e }),
                                                v(!1),
                                                E(!0);
                                            } catch (e) {
                                              console.error(
                                                "Error during retry:",
                                                e,
                                              ),
                                                b(
                                                  "Failed to switch wallet. Please try again.",
                                                );
                                            }
                                          else
                                            console.error(
                                              "Error connecting wallet:",
                                              a,
                                            ),
                                              b(
                                                "Failed to connect wallet. Please try again.",
                                              );
                                        }
                                      },
                                    },
                                    e.id,
                                  ),
                                ),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      };
      function m(e) {
        let { connector: t, onClick: s } = e,
          [a, i] = (0, o.useState)(!1);
        return ((0, o.useEffect)(() => {
          (async () => {
            i(!!(await t.getProvider()));
          })();
        }, [t]),
        "OKX Wallet" === t.name)
          ? (0, l.jsx)("div", {
              className:
                "okx-wallet-option flex items-center justify-between p-4 border rounded-lg",
              children: a
                ? (0, l.jsx)("button", {
                    onClick: s,
                    className:
                      "btn w-full flex items-center justify-center gap-2",
                    children: "Connect OKX Wallet",
                  })
                : (0, l.jsx)("a", {
                    href: "https://www.okx.com/download",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn flex items-center justify-center gap-2",
                    children: "Download OKX Wallet",
                  }),
            })
          : (0, l.jsx)("button", {
              disabled: !a,
              onClick: s,
              className: "btn w-full",
              children: t.name,
            });
      }
      function x(e) {
        let { connectors: t, onConnect: s } = e,
          [a, i] = (0, o.useState)(!1),
          [n, c] = (0, o.useState)(null),
          { disconnect: d } = (0, r.q)();
        (0, o.useEffect)(() => {
          (async () => {
            let e = t.find((e) => "OKX Wallet" === e.name);
            if (e) {
              c(e);
              try {
                let t = await e.getProvider();
                i(!!t);
              } catch (e) {
                i(!1);
              }
            }
          })();
        }, [t]);
        let h = async (e) => {
          try {
            await s(e);
          } catch (a) {
            var t, l;
            if (
              (null == a
                ? void 0
                : null === (t = a.message) || void 0 === t
                  ? void 0
                  : t.includes("already connected")) ||
              (null == a
                ? void 0
                : null === (l = a.message) || void 0 === l
                  ? void 0
                  : l.includes("already processing"))
            )
              try {
                await d(), await s(e);
              } catch (e) {
                throw (console.error("Error during retry:", e), e);
              }
            else throw a;
          }
        };
        return (0, l.jsx)("div", {
          className:
            "okx-wallet-option flex items-center justify-between p-4 border rounded-lg",
          children:
            a && n
              ? (0, l.jsx)("button", {
                  onClick: () => h(n),
                  className:
                    "btn w-full flex items-center justify-center gap-2",
                  children: "Connect OKX Wallet",
                })
              : (0, l.jsx)("a", {
                  href: "https://www.okx.com/download",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "btn w-full flex items-center justify-center gap-2",
                  children: "Download OKX Wallet",
                }),
        });
      }
      var u = s(71013),
        g = s(11404),
        f = s(87088),
        j = s(44518),
        w = s(32492),
        v = s(52838),
        p = {
          src: "/_next/static/media/move-icon.82c668f5.png",
          height: 1546,
          width: 1546,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEX80zH/9TpYShJVSRL/6zj/3DR+axn/3zT/4DVMaXH/7Tj/6Tf/3jSQex2wmCTmxy9YSxFEOg7p1jNWX/ojAAAAC3RSTlMurvr+7vb6se0ArrwQ/GEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVHicBcGJEQAhCACx1UOBAfz6L/YSHB1DcbDIDIO2ZsRcjbFv1d2GrHPOtwTNXtVTQd7eT8BRM8V/S6gCJWaNKPUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        A = s(86264),
        y = s.n(A),
        b = s(28719),
        N = {
          src: "/_next/static/media/staked-move.fda8bc50.svg",
          height: 931,
          width: 3122,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/movernance.d5c48b32.svg",
          height: 1053,
          width: 1053,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/meridian.a3956d08.svg",
          height: 715,
          width: 1684,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: "/_next/static/media/sign-logo.342e46ea.png",
          height: 896,
          width: 896,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXHleQ/jWQ/iTQblcR7kXRDgUQZRnDdkAAAAB3RSTlMAA1IhO3AUlHZr/AAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxNi8kNAEAIAjnE/ks268clfIYMwIV8BVi13I4kEbYS7Wj3+d93AArNAEp2r0+PAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        k = s(24240);
      let _ = new w.x3({ slug: "move" }),
        M = () =>
          (0, l.jsx)("video", {
            src: "/videos/moveus-angel-1.mp4",
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "claim-video",
          }),
        F = () =>
          (0, l.jsx)("div", {
            className: "claim-content",
            children: (0, l.jsxs)("div", {
              className: "claim-header",
              children: [
                (0, l.jsxs)("h1", {
                  children: ["Sorry, you", "'", "re not eligible"],
                }),
                (0, l.jsx)("p", {
                  children:
                    "Unfortunately, you are not eligible for this MoveDrop.",
                }),
                (0, l.jsx)("p", {
                  children: (0, l.jsxs)("span", {
                    className: "desc flex items-center gap-2 justify-center",
                    children: [
                      " ",
                      "Follow Movement Network Foundation on",
                      " ",
                      (0, l.jsx)(b.default, {
                        href: "https://x.com/movementfdn",
                        target: "_blank",
                        className: "underline",
                        children: (0, l.jsxs)("svg", {
                          width: "32",
                          height: "32",
                          viewBox: "0 0 32 32",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, l.jsxs)("g", {
                              clipPath: "url(#clip0_5721_56663)",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M17.0701 15.4536L24.2713 25.7539H21.3159L15.4396 17.3488V17.3483L14.5769 16.1145L7.7124 6.29541H10.6678L16.2074 14.2198L17.0701 15.4536Z",
                                  fill: "white",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M28.5423 0H3.45767C1.5481 0 0 1.5481 0 3.45767V28.5423C0 30.4519 1.5481 32 3.45767 32H28.5423C30.4519 32 32 30.4519 32 28.5423V3.45767C32 1.5481 30.4519 0 28.5423 0ZM20.4106 27.1366L14.4642 18.4823L7.01914 27.1366H5.09496L13.6098 17.2393L5.09496 4.84694H11.5894L17.2203 13.042L24.2702 4.84694H26.1944L18.0749 14.2852H18.0744L26.905 27.1366H20.4106Z",
                                  fill: "white",
                                }),
                              ],
                            }),
                            (0, l.jsx)("defs", {
                              children: (0, l.jsx)("clipPath", {
                                id: "clip0_5721_56663",
                                children: (0, l.jsx)("rect", {
                                  width: "32",
                                  height: "32",
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      " ",
                      "for future incentives",
                    ],
                  }),
                }),
              ],
            }),
          }),
        S = (e) => {
          let { amount: t, address: s } = e;
          return (0, l.jsx)(H, {
            amount: t,
            address: s,
            title: "MOVEDROP CLAIMED VIA OKX EXCHANGE ACCOUNT",
          });
        },
        I = (e) => {
          let { amount: t, address: s } = e;
          return (0, l.jsx)(H, {
            amount: t,
            address: s,
            title: "MOVEDROP ALREADY CLAIMED!",
          });
        },
        D = (e) => {
          let { amount: t, address: s, amountL2: a } = e;
          return (0, l.jsx)(V, {
            amount: t,
            address: s,
            title: "Already Registered to Claim on Movement Network",
            amountL2: a,
          });
        },
        O = async () => {
          let e = document.querySelector(".character-image");
          if (!e) return;
          let t = (
              await y()(e, {
                scale: 2,
                useCORS: !0,
                logging: !1,
                backgroundColor: "#000000",
                imageTimeout: 0,
                onclone: (t) => {
                  let s = t.querySelector(".character-image");
                  s &&
                    ((s.style.width = "".concat(e.clientWidth, "px")),
                    (s.style.height = "".concat(e.clientHeight, "px")));
                },
              })
            ).toDataURL("image/jpeg", 0.95),
            s = document.createElement("a");
          (s.href = t), (s.download = "movedrop-claimed.jpg"), s.click();
        },
        H = (e) => {
          let { amount: t, address: s, title: a } = e,
            i = "https://twitter.com/intent/tweet?text=".concat(
              encodeURIComponent("#MoveDrop"),
            );
          return (0, l.jsxs)("div", {
            className: "thank-you-content mx-auto",
            children: [
              (0, l.jsxs)(b.default, {
                href: "https://app.sign.global/",
                target: "_blank",
                className: "absolute top-2 right-4 flex items-center gap-2",
                children: [
                  (0, l.jsx)("span", {
                    className: "text-white text-[10px] mb-1",
                    children: "Powered By",
                  }),
                  (0, l.jsx)(v.default, {
                    src: C,
                    alt: "Sign Logo",
                    className: "inline w-[50px]",
                  }),
                ],
              }),
              (0, l.jsx)("h1", { children: a || "MOVEDROP CLAIMED!" }),
              (0, l.jsx)("p", {
                children: "Thanks for being part of the Movement!",
              }),
              (0, l.jsxs)("div", {
                className: "amount-box",
                children: [
                  (0, l.jsxs)("h2", { children: [t, " $MOVE"] }),
                  (0, l.jsxs)("p", { children: ["Will be sent to: ", s] }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "character-image",
                style: { backgroundImage: "url(/images/l1-claim-bkg.webp)" },
                children: (0, l.jsxs)("div", {
                  className: "inner w-full h-full",
                  children: [
                    (0, l.jsx)("h2", { children: "GOT THE DROP!" }),
                    parseInt(t) >= 2e3
                      ? (0, l.jsxs)("h3", { children: [t, " $MOVE "] })
                      : null,
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className: "tweet-button",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, l.jsx)("span", {
                        onClick: O,
                        className: "btn-small cursor-pointer",
                        children: "Download Image",
                      }),
                      " ",
                      "to Share on",
                      " ",
                    ],
                  }),
                  (0, l.jsx)(b.default, {
                    href: i,
                    target: "_blank",
                    children: (0, l.jsxs)("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, l.jsxs)("g", {
                          clipPath: "url(#clip0_5721_56663)",
                          children: [
                            (0, l.jsx)("path", {
                              d: "M17.0701 15.4536L24.2713 25.7539H21.3159L15.4396 17.3488V17.3483L14.5769 16.1145L7.7124 6.29541H10.6678L16.2074 14.2198L17.0701 15.4536Z",
                              fill: "white",
                            }),
                            (0, l.jsx)("path", {
                              d: "M28.5423 0H3.45767C1.5481 0 0 1.5481 0 3.45767V28.5423C0 30.4519 1.5481 32 3.45767 32H28.5423C30.4519 32 32 30.4519 32 28.5423V3.45767C32 1.5481 30.4519 0 28.5423 0ZM20.4106 27.1366L14.4642 18.4823L7.01914 27.1366H5.09496L13.6098 17.2393L5.09496 4.84694H11.5894L17.2203 13.042L24.2702 4.84694H26.1944L18.0749 14.2852H18.0744L26.905 27.1366H20.4106Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        (0, l.jsx)("defs", {
                          children: (0, l.jsx)("clipPath", {
                            id: "clip0_5721_56663",
                            children: (0, l.jsx)("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "staking w-full mt-20 mb-6",
                children: [
                  (0, l.jsx)("h3", {
                    className: "text-white",
                    children: "Where can I stake my $MOVE?",
                  }),
                  (0, l.jsxs)("div", {
                    className: "grid grid-cols-2 md:grid-cols-3 gap-4 my-4",
                    children: [
                      (0, l.jsx)(b.default, {
                        href: "https://www.stakedmove.fi/",
                        target: "_blank",
                        className:
                          "staking-card flex flex-col justify-center items-center ",
                        children: (0, l.jsx)(v.default, {
                          src: N,
                          alt: "Staked Icon",
                          className: "inline h-[60px]",
                        }),
                      }),
                      (0, l.jsx)(b.default, {
                        href: "https://meridian-git-meridian-lsd-thala-labs.vercel.app/lsd",
                        target: "_blank",
                        className:
                          "staking-card flex flex-col justify-center items-center",
                        children: (0, l.jsx)(v.default, {
                          src: L,
                          alt: "Meridian Icon",
                          className: "inline h-[80px]",
                        }),
                      }),
                      (0, l.jsxs)(b.default, {
                        href: "https://alpha.movernance.com/stake",
                        target: "_blank",
                        className:
                          "staking-card flex flex-col justify-center items-center ",
                        children: [
                          (0, l.jsx)(v.default, {
                            src: E,
                            alt: "Movernance Icon",
                            className: "inline h-[50px]",
                          }),
                          (0, l.jsx)("p", { children: "Movernance" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        V = (e) => {
          let { amount: t, address: s, title: a, amountL2: i } = e,
            n = "https://twitter.com/intent/tweet?text=".concat(
              encodeURIComponent("#MoveDrop"),
            ),
            r = i
              ? Number(i || "0").toString()
              : (1.25 * Number(t || "0")).toString();
          return (0, l.jsxs)("div", {
            className: "thank-you-content mx-auto",
            children: [
              (0, l.jsx)("h1", {
                children:
                  a || "MOVEDROP WILL BE SENT AT PUBLIC MAINNET LAUNCH!",
              }),
              (0, l.jsx)("p", {
                children: "Thanks for being part of the Movement!",
              }),
              (0, l.jsxs)("div", {
                className: "amount-box",
                children: [
                  (0, l.jsxs)("h2", { children: [r, " $MOVE"] }),
                  (0, l.jsxs)("p", { children: ["Will be sent to: ", s] }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "character-image",
                style: { backgroundImage: "url(/images/l2-claim-bkg.webp)" },
                children: (0, l.jsxs)("div", {
                  className: "inner w-full h-full",
                  children: [
                    (0, l.jsx)("h2", { children: "MOVEDROP!" }),
                    parseInt(r) >= 2e3
                      ? (0, l.jsxs)("h3", {
                          children: [
                            r,
                            " $MOVE",
                            " ",
                            (0, l.jsx)(v.default, {
                              src: p,
                              alt: "Move Icon",
                              className: "inline w-[30px] h-[30px] ml-[5px]",
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className: "tweet-button",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, l.jsx)("span", {
                        onClick: O,
                        className: "btn-small cursor-pointer",
                        children: "Download Image",
                      }),
                      " ",
                      "to Share on",
                      " ",
                    ],
                  }),
                  (0, l.jsx)(b.default, {
                    href: n,
                    target: "_blank",
                    children: (0, l.jsxs)("svg", {
                      width: "32",
                      height: "32",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, l.jsxs)("g", {
                          clipPath: "url(#clip0_5721_56663)",
                          children: [
                            (0, l.jsx)("path", {
                              d: "M17.0701 15.4536L24.2713 25.7539H21.3159L15.4396 17.3488V17.3483L14.5769 16.1145L7.7124 6.29541H10.6678L16.2074 14.2198L17.0701 15.4536Z",
                              fill: "white",
                            }),
                            (0, l.jsx)("path", {
                              d: "M28.5423 0H3.45767C1.5481 0 0 1.5481 0 3.45767V28.5423C0 30.4519 1.5481 32 3.45767 32H28.5423C30.4519 32 32 30.4519 32 28.5423V3.45767C32 1.5481 30.4519 0 28.5423 0ZM20.4106 27.1366L14.4642 18.4823L7.01914 27.1366H5.09496L13.6098 17.2393L5.09496 4.84694H11.5894L17.2203 13.042L24.2702 4.84694H26.1944L18.0749 14.2852H18.0744L26.905 27.1366H20.4106Z",
                              fill: "white",
                            }),
                          ],
                        }),
                        (0, l.jsx)("defs", {
                          children: (0, l.jsx)("clipPath", {
                            id: "clip0_5721_56663",
                            children: (0, l.jsx)("rect", {
                              width: "32",
                              height: "32",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        T = (e) => {
          let { message: t, onRetry: s } = e;
          return (0, l.jsx)("div", {
            className: "claim-content",
            children: (0, l.jsxs)("div", {
              className: "claim-header",
              children: [
                (0, l.jsx)("h1", { children: "Error Processing Claim" }),
                (0, l.jsx)("p", { children: t }),
                (0, l.jsx)("button", {
                  className: "btn",
                  onClick: s,
                  children: "Try Again",
                }),
              ],
            }),
          });
        },
        P = (e) => {
          var t, s, a, i;
          let {
              claimDetails: n,
              evmAddress: r,
              isLoading: c,
              onEVMClaim: o,
              onL2Claim: h,
              errorMessage: m,
            } = e,
            x = n.amountL2
              ? Number(n.amountL2 || "0").toString()
              : (1.25 * Number(n.amount || "0")).toString();
          return (0, l.jsxs)("div", {
            className: "claim-content",
            children: [
              (0, l.jsxs)("div", {
                className: "claim-header",
                children: [
                  (0, l.jsxs)("h1", { children: ["You", "'", "re Eligible!"] }),
                  (0, l.jsx)("p", {
                    children:
                      "Claim your MoveDrop in one of these two options:",
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "claim-options",
                children: [
                  (0, l.jsxs)("div", {
                    className: "claim-card claim-card--ethereum",
                    children: [
                      (0, l.jsxs)("h2", { children: [n.amount, " $MOVE"] }),
                      (0, l.jsx)("p", {
                        children: "Claim on Ethereum Mainnet",
                      }),
                      (0, l.jsx)("div", {
                        className: "wallet-address",
                        children: (0, l.jsxs)("p", {
                          children: [
                            null === (t = n.evm_address) || void 0 === t
                              ? void 0
                              : t.slice(0, 8),
                            "...",
                            null === (s = n.evm_address) || void 0 === s
                              ? void 0
                              : s.slice(-8),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "claim-action flex flex-col gap-4 items-center",
                        children: [
                          (0, l.jsxs)("button", {
                            className: "btn btn-tokens",
                            onClick: o,
                            disabled: !r || c,
                            children: [
                              c ? (0, l.jsx)(d, {}) : "CLAIM",
                              (0, l.jsxs)("svg", {
                                width: "52",
                                height: "51",
                                viewBox: "0 0 52 51",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  (0, l.jsx)("circle", {
                                    cx: "26.0945",
                                    cy: "25.45",
                                    r: "25.1907",
                                    fill: "black",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "26.4072",
                                    y: "24.061",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "31.313",
                                    y: "28.9666",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "31.313",
                                    y: "19.1555",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "36.2183",
                                    y: "24.061",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "16.5962",
                                    y: "14.25",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "21.502",
                                    y: "19.1555",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "21.502",
                                    y: "9.34448",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "26.4072",
                                    y: "14.25",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "16.5962",
                                    y: "33.8719",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "21.502",
                                    y: "38.7775",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "21.502",
                                    y: "28.9664",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                  (0, l.jsx)("rect", {
                                    x: "26.4072",
                                    y: "33.8719",
                                    width: "3.50393",
                                    height: "3.50393",
                                    fill: "#FFDA34",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            (0, l.jsx)("div", {
                              className:
                                "error-msg bg-red-500 text-white p-2 rounded-md",
                              children: m.includes("exceeds the balance")
                                ? "Insufficient funds to cover gas fees"
                                : m,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "claim-card claim-card--movement",
                    children: [
                      (0, l.jsxs)("h2", { children: [x, " $MOVE"] }),
                      (0, l.jsxs)("p", {
                        children: [
                          "Claim on Movement Network",
                          (0, l.jsx)("br", {}),
                          "Mainnet at Launch",
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "wallet-address",
                        children: (0, l.jsxs)("p", {
                          children: [
                            null === (a = n.aptos_address) || void 0 === a
                              ? void 0
                              : a.slice(0, 8),
                            "...",
                            null === (i = n.aptos_address) || void 0 === i
                              ? void 0
                              : i.slice(-8),
                          ],
                        }),
                      }),
                      (0, l.jsxs)("button", {
                        className: "btn btn-tokens",
                        onClick: h,
                        disabled: c,
                        children: [
                          "CLAIM",
                          (0, l.jsxs)("svg", {
                            width: "52",
                            height: "51",
                            viewBox: "0 0 52 51",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, l.jsx)("circle", {
                                cx: "26.0945",
                                cy: "25.45",
                                r: "25.1907",
                                fill: "black",
                              }),
                              (0, l.jsx)("rect", {
                                x: "26.4072",
                                y: "24.061",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "31.313",
                                y: "28.9666",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "31.313",
                                y: "19.1555",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "36.2183",
                                y: "24.061",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "16.5962",
                                y: "14.25",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "21.502",
                                y: "19.1555",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "21.502",
                                y: "9.34448",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "26.4072",
                                y: "14.25",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "16.5962",
                                y: "33.8719",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "21.502",
                                y: "38.7775",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "21.502",
                                y: "28.9664",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                              (0, l.jsx)("rect", {
                                x: "26.4072",
                                y: "33.8719",
                                width: "3.50393",
                                height: "3.50393",
                                fill: "#FFDA34",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function R(e) {
        var t, s, a, i, r, h, m;
        let { claimDetails: x } = e,
          [w, v] = (0, o.useState)(!1),
          [p, A] = (0, o.useState)(!1),
          [y, b] = (0, o.useState)(""),
          { address: N, chainId: E } = (0, n.m)(),
          { data: L } = (0, u.p)(),
          C = (0, g.t)(),
          { reconnect: O } = (0, f.Y)(),
          { switchChain: R } = (0, j.o)();
        console.log("Current wallet state:", {
          walletClient: L,
          evmAddress: N,
          isConnected: !!L,
        });
        let [B, U] = (0, o.useState)(() =>
            x.claimedOnL2
              ? "CLAIMED_L2"
              : x.claimedOnL1
                ? "CLAIMED_L1"
                : x.isOKXUser
                  ? "OKX_USER"
                  : x.isEligible
                    ? "ELIGIBLE"
                    : "NOT_ELIGIBLE",
          ),
          [W, K] = (0, o.useState)("loading"),
          G = (0, o.useRef)(!1),
          X = (0, o.useCallback)(async () => {
            if (
              (console.log("Checking EVM status:", {
                claimState: B,
                evmCheckInProgress: G.current,
              }),
              !x.evm_address || "ELIGIBLE" !== B || G.current)
            ) {
              K("ready");
              return;
            }
            try {
              G.current = !0;
              let s = (0, k.K)(x.evm_address),
                l = await _.getAirdropClaims({ address: s });
              if (!l.length || !l[0].claimId)
                throw Error("Claim not found on chain");
              let a = l[0].claimId;
              if (await _.checkClaimed(a)) {
                var e, t;
                (
                  await fetch("/api/claim/evm", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      address: x.evm_address,
                      txHash: "completed already",
                      signature:
                        (null === (e = x.wallet_details) || void 0 === e
                          ? void 0
                          : e.signature) || "",
                      message:
                        (null === (t = x.wallet_details) || void 0 === t
                          ? void 0
                          : t.message) || "",
                    }),
                    cache: "no-store",
                  })
                ).ok || console.error("Failed to save claim status"),
                  U("CLAIMED_L1");
              }
              K("ready");
            } catch (e) {
              console.error("EVM check error:", e), K("error");
            } finally {
              G.current = !1;
            }
          }, [x.evm_address, B, x.wallet_details]);
        (0, o.useEffect)(() => {
          X();
        }, [X]);
        let [Y, Z] = (0, o.useState)(null),
          J = async () => {
            var e, t, s, l;
            if (!x.evm_address) {
              b("No EVM address found");
              return;
            }
            if (
              !(null === (e = x.wallet_details) || void 0 === e
                ? void 0
                : e.signature) ||
              !(null === (t = x.wallet_details) || void 0 === t
                ? void 0
                : t.message)
            ) {
              b("Wallet details are missing. Please refresh and try again.");
              return;
            }
            if (!L)
              try {
                if ((await O(), !L)) {
                  b("Please try again or refresh the page.");
                  return;
                }
              } catch (e) {
                console.error("Wallet reconnection failed:", e),
                  b(
                    "Failed to connect wallet. Please try again or refresh the page.",
                  );
                return;
              }
            A(!0), b("");
            try {
              let e;
              if (
                (console.log("Wallet state:", {
                  walletClient: L,
                  chainId: E,
                  walletDetails: x.wallet_details,
                }),
                1 !== E)
              )
                try {
                  await R({ chainId: 1 });
                } catch (e) {
                  console.error("Chain switch failed:", e),
                    b("Failed to switch to evm mainnet. Please try again.");
                  return;
                }
              let t = (0, k.K)(x.evm_address),
                a = await _.getAirdropClaims({ address: t });
              if (!a.length || !a[0].claimId)
                throw Error(
                  "This claim does not exist on chain. Please refresh and try again.",
                );
              let i = a[0].claimId;
              if (!i)
                throw Error(
                  "This claim does not exist on chain. Please refresh and try again.",
                );
              if (!(await _.checkClaimed(i))) {
                e = await _.claimAirdrop({ claimId: i, walletClient: L });
                let t = await (null == C
                  ? void 0
                  : C.waitForTransactionReceipt({ hash: e }));
                if ((null == t ? void 0 : t.status) !== "success")
                  throw Error(
                    "Transaction may have failed or is taking longer than expected. View on Etherscan: tx ".concat(
                      e,
                    ),
                  );
              }
              if (
                !(
                  await fetch("/api/claim/evm", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      address: x.evm_address,
                      txHash:
                        (null == e ? void 0 : e.toString()) ||
                        "completed already",
                      signature:
                        (null === (s = x.wallet_details) || void 0 === s
                          ? void 0
                          : s.signature) || "",
                      message:
                        (null === (l = x.wallet_details) || void 0 === l
                          ? void 0
                          : l.message) || "",
                    }),
                    cache: "no-store",
                  })
                ).ok
              )
                throw Error("Failed to save claim status");
              U("THANK_YOU_EVM");
            } catch (t) {
              console.error("Claim error:", t);
              let e = "Failed to process claim. Please try again.";
              t instanceof Error &&
                (t.message.includes("exceeds the balance")
                  ? (e = "Insufficient funds to cover gas fees")
                  : t.message.includes("user rejected")
                    ? (e = "Transaction was rejected")
                    : t.message.includes("already been processed")
                      ? (e = "This claim has already been processed")
                      : t.message.includes("wallet_details") &&
                        (e =
                          "Wallet connection issue. Please refresh and try again.")),
                b(e);
            } finally {
              A(!1);
            }
          },
          Q = async () => {
            A(!0);
            try {
              var e, t;
              if (
                !(
                  await fetch("/api/claim/l2", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      address: x.evm_address,
                      signature:
                        (null === (e = x.wallet_details) || void 0 === e
                          ? void 0
                          : e.signature) || "",
                      message:
                        (null === (t = x.wallet_details) || void 0 === t
                          ? void 0
                          : t.message) || "",
                    }),
                    cache: "no-store",
                  })
                ).ok
              )
                throw Error("Failed to process L2 claim");
              U("THANK_YOU_L2");
            } catch (e) {
              console.error("L2 claim error:", e),
                b(
                  e instanceof Error
                    ? e.message
                    : "Failed to process L2 claim. Please try again.",
                ),
                U("ERROR");
            } finally {
              A(!1), v(!1);
            }
          },
          [$, z] = (0, o.useState)(null),
          q = (0, o.useRef)(!1),
          ee = (0, o.useCallback)(async () => {
            if ("ELIGIBLE" === B && !q.current)
              try {
                q.current = !0;
                let e = await fetch("/api/pool", {
                  headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
                  cache: "no-store",
                });
                if (!e.ok) throw Error("Failed to fetch pool data");
                let t = await e.json();
                z({ title: t.title, amount: t.amount });
              } catch (e) {
                console.error("Error fetching pool data:", e);
              } finally {
                q.current = !1;
              }
          }, [B]);
        return (
          (0, o.useEffect)(() => {
            ee();
          }, [ee]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("main", {
                className: "claim-screen",
                id: "claim-screen",
                children: [
                  "ELIGIBLE" === B &&
                    "ready" !== W &&
                    (0, l.jsx)("div", {
                      className: "evm-status-banner",
                      children:
                        "loading" === W
                          ? (0, l.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, l.jsx)(d, {}),
                                (0, l.jsx)("span", {
                                  children: "Checking EVM status...",
                                }),
                              ],
                            })
                          : (0, l.jsx)("div", {
                              className: "flex items-center justify-between",
                              children: (0, l.jsx)("span", {
                                children:
                                  "Experiencing network issues. Please be patient while claiming.",
                              }),
                            }),
                    }),
                  "ELIGIBLE" === B ? (0, l.jsx)(M, {}) : null,
                  "NOT_ELIGIBLE" === B && (0, l.jsx)(F, {}),
                  "OKX_USER" === B &&
                    (0, l.jsx)(S, {
                      amount:
                        (null === (t = x.amount) || void 0 === t
                          ? void 0
                          : t.toString()) || "0",
                      address: x.evm_address || "",
                    }),
                  "CLAIMED_L1" === B &&
                    (0, l.jsx)(I, {
                      amount:
                        (null === (s = x.amount) || void 0 === s
                          ? void 0
                          : s.toString()) || "0",
                      address: x.evm_address || "",
                    }),
                  "CLAIMED_L2" === B &&
                    (0, l.jsx)(D, {
                      amount:
                        (null === (a = x.amount) || void 0 === a
                          ? void 0
                          : a.toString()) || "0",
                      address: x.aptos_address || "",
                      amountL2:
                        (null === (i = x.amountL2) || void 0 === i
                          ? void 0
                          : i.toString()) || null,
                    }),
                  "THANK_YOU_EVM" === B &&
                    (0, l.jsx)(H, {
                      amount:
                        (null === (r = x.amount) || void 0 === r
                          ? void 0
                          : r.toString()) || "0",
                      address: x.evm_address || "",
                    }),
                  "THANK_YOU_L2" === B &&
                    (0, l.jsx)(V, {
                      amount:
                        (null === (h = x.amount) || void 0 === h
                          ? void 0
                          : h.toString()) || "0",
                      address: x.aptos_address || "",
                      amountL2:
                        (null === (m = x.amountL2) || void 0 === m
                          ? void 0
                          : m.toString()) || null,
                    }),
                  "ERROR" === B &&
                    (0, l.jsx)(T, {
                      message: y,
                      onRetry: () => {
                        U("ELIGIBLE"), b("");
                      },
                    }),
                  "ELIGIBLE" === B &&
                    (0, l.jsx)(P, {
                      claimDetails: x,
                      evmAddress: x.evm_address,
                      isLoading: p,
                      onEVMClaim: J,
                      onL2Claim: () => v(!0),
                      errorMessage: y,
                    }),
                  "ELIGIBLE" === B &&
                    $ &&
                    (0, l.jsxs)("div", {
                      className:
                        "pool flex flex-col items-center mt-10 mb-4 gap-1",
                      children: [
                        (0, l.jsx)("h2", { children: $.title }),
                        (0, l.jsx)("h3", { children: $.amount }),
                      ],
                    }),
                ],
              }),
              w &&
                (0, l.jsx)(c, {
                  onClose: () => !p && v(!1),
                  children: (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)("h3", {
                        children: "Claim on Movement Network",
                      }),
                      (0, l.jsx)("span", {
                        className: "notice",
                        children:
                          "By proceeding, you agree to claim your tokens on Movement Network at launch.",
                      }),
                      (0, l.jsxs)("div", {
                        className: "btn-wrap",
                        children: [
                          (0, l.jsx)("button", {
                            className: "btn btn-proceed",
                            onClick: Q,
                            disabled: p,
                            children: p ? (0, l.jsx)(d, {}) : "Proceed",
                          }),
                          (0, l.jsx)("button", {
                            className: "btn btn-back",
                            onClick: () => v(!1),
                            disabled: p,
                            children: "Go Back",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      function B() {
        let [e, t] = (0, o.useState)(null),
          [s, a] = (0, o.useState)(!1),
          [i, n] = (0, o.useState)(!1),
          [r, c] = (0, o.useState)(1),
          [m, x] = (0, o.useState)(null),
          [u, g] = (0, o.useState)(null),
          [f, j] = (0, o.useState)(null),
          w = (0, o.useCallback)(async () => {
            if (e) {
              a(!0), x(null);
              try {
                let t = await fetch("/api/claim/start", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...e }),
                    cache: "no-store",
                  }),
                  s = await t.json();
                if (!t.ok || !s.success)
                  throw Error(s.error || "Failed to submit form");
                g(s);
              } catch (e) {
                console.error("Error submitting form:", e),
                  t(null),
                  x(
                    e instanceof Error
                      ? e.message
                      : "Whoops something went wrong. Please refresh and try again.",
                  );
              } finally {
                a(!1);
              }
            }
          }, [e]);
        (0, o.useEffect)(() => {
          e && w();
        }, [e, w]),
          (0, o.useEffect)(() => {
            u && c(2);
          }, [u]);
        let v = (0, o.useCallback)(async () => {
          try {
            j({ text: "xxx", link: "", show: "false" });
          } catch (e) {
            console.error("Error fetching alert data:", e);
          }
        }, []);
        return ((0, o.useEffect)(() => {
          v();
        }, [v]),
        1 === r)
          ? (0, l.jsx)(l.Fragment, {
              children: (0, l.jsx)("div", {
                id: "main-wrap",
                children: (0, l.jsx)("section", {
                  className: "inner registration-check okx-registration",
                  id: "registration-check-inner",
                  children: (0, l.jsxs)("div", {
                    className: "contain",
                    children: [
                      (null == f ? void 0 : f.show) &&
                        (null == f ? void 0 : f.show) === "true" &&
                        (0, l.jsxs)("div", {
                          className:
                            "alert-banner bg-yellow-100 border-yellow-600 text-bold text-black px-4 py-3 relative rounded-lg max-w-[600px] mb-6",
                          children: [
                            f.text,
                            f.link &&
                              (0, l.jsx)("a", {
                                href: f.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "underline text-black",
                                style: { color: "#000" },
                                children: "  Learn more",
                              }),
                          ],
                        }),
                      (0, l.jsxs)("h1", {
                        children: [
                          "MoveDrop",
                          (0, l.jsx)("br", {}),
                          "Claim is Open",
                        ],
                      }),
                      (0, l.jsx)("p", {
                        className: "body-35 px-2 max-w-[1200px] mb-4",
                        children:
                          "To get started, connect the EVM wallet you used during registration.",
                      }),
                      m &&
                        (0, l.jsx)("div", {
                          className: "error-message max-w-[500px]",
                          children: m,
                        }),
                      !i &&
                        (0, l.jsx)(l.Fragment, {
                          children: e
                            ? (0, l.jsxs)("div", {
                                className: "button-row flex gap-4 items-center",
                                children: [
                                  (0, l.jsxs)("button", {
                                    className: "btn",
                                    children: [
                                      "Connected ",
                                      e.address.slice(0, 6),
                                      "...",
                                      e.address.slice(-6),
                                    ],
                                  }),
                                  s &&
                                    !m &&
                                    (0, l.jsx)("div", {
                                      className: "mt-4",
                                      children: (0, l.jsx)(d, {}),
                                    }),
                                ],
                              })
                            : (0, l.jsx)(h, {
                                setDetails: (e) => {
                                  t(e);
                                },
                              }),
                        }),
                    ],
                  }),
                }),
              }),
            })
          : 2 === r && u
            ? (0, l.jsx)("div", {
                id: "main-wrap",
                className: "checker",
                children: (0, l.jsx)("div", {
                  id: "checker-wrap",
                  children: (0, l.jsx)("div", {
                    className: "contain",
                    children: (0, l.jsx)(R, { claimDetails: u }),
                  }),
                }),
              })
            : void 0;
      }
    },
  },
]);
