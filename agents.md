# Agents & AI Integration Guide

This document defines how AI agents, serverless functions, and LLM-powered features
should be integrated into this project. It provides conventions, folder structure,
and implementation patterns to ensure all AI features remain simple, fast, and
reliable—especially in a live presentation environment.

---

## 1. Purpose

This project is a scrollytelling presentation first, with optional interactive AI
features (e.g., text rewrites, experiment generators, “broken playbook analyzer”).
Agents should be:

- lightweight  
- deterministic  
- single-purpose  
- fast  
- safe for on-stage use  

---

## 2. Principles for Agents

1. **Single Responsibility**  
   Each agent performs one focused task (rewrite text, analyze a workflow, generate experiments).

2. **Stateless**  
   No long-term memory or session state.

3. **Deterministic Output**  
   Prompts and parameters should minimize unexpected hallucination.

4. **Fast Execution**  
   < 1.5 seconds whenever possible, especially for
